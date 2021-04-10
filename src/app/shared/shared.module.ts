import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from './time-ago.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [TimeAgoPipe, ErrorMessageComponent],
  imports: [CommonModule, FontAwesomeModule, HttpClientModule],
  exports: [
    FontAwesomeModule,
    HttpClientModule,
    TimeAgoPipe,
    ErrorMessageComponent,
  ],
})
export class SharedModule {}
