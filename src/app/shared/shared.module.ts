import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    FontAwesomeModule,
    HttpClientModule,
    TimeAgoPipe
  ]
})
export class SharedModule { }
