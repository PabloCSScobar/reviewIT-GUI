import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";
@Pipe({
	name:'timeAgo',
	pure:false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
	private timer: number;

	constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}
	transform(value:number) {
		this.removeTimer();
		let d = new Date(value);
		let now = new Date();
		let seconds = Math.round(Math.abs((now.getTime() - d.getTime())/1000));
		let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) *1000;
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
		});
		let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
		let years = Math.round(Math.abs(days/365));
		if (Number.isNaN(seconds)){
			return '';
		} else if (seconds <= 45) {
			return 'kilka sekund temu';
		} else if (seconds <= 90) {
			return 'minutę temu';
		} else if (minutes <= 4) {
			return minutes + ' minuty temu';
		} else if (minutes <= 5) {
			return minutes + ' minut temu';
		} else if (minutes <= 90) {
			return 'godzinę temu';
		} else if (hours <= 4) {
			return hours + ' godziny temu';
		} else if (hours <= 5) {
			return hours + ' godzin temu';
		} else if (hours <= 36) {
			return 'wczoraj';
		} else if (days <= 2) {
			return days + ' dni temu';
		} else if (days <= 45) {
			return 'miesiąc temu';
		} else if (days <= 130) {
			return 'miesiące temu';
		} else if (days <= 345) {
			return months + ' miesięcy temu';
		} else if (days <= 545) {
			return 'rok temu';
		} else { // (days > 545)
			return years + ' lat/a temu';
		}
	}
	ngOnDestroy(): void {
		this.removeTimer();
	}
	private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
	}
	private getSecondsUntilUpdate(seconds:number) {
		let min = 60;
		let hr = min * 60;
		let day = hr * 24;
		if (seconds < min) { // less than 1 min, update every 2 secs
			return 2;
		} else if (seconds < hr) { // less than an hour, update every 30 secs
			return 30;
		} else if (seconds < day) { // less then a day, update every 5 mins
			return 300;
		} else { // update every hour
			return 3600;
		}
	}
}
