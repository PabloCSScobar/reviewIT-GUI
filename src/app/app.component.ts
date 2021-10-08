import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;
  constructor(public loader: LoadingService) {}

  ngOnInit() {
    this.loader.loading$.subscribe((loading) => (this.loading = loading));
  }
}
