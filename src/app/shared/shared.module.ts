import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from './time-ago.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [TimeAgoPipe, ErrorMessageComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule, TimeAgoPipe, ErrorMessageComponent],
})
export class SharedModule {}
