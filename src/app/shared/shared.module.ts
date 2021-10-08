import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from './time-ago.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CutStringPipe } from './pipes/cut-string.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';

@NgModule({
  declarations: [
    TimeAgoPipe,
    ErrorMessageComponent,
    StarRatingComponent,
    CutStringPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MtxLoaderModule,
  ],
  exports: [
    HttpClientModule,
    TimeAgoPipe,
    ErrorMessageComponent,
    StarRatingComponent,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    CutStringPipe,
    MatSidenavModule,
    MtxLoaderModule,
  ],
})
export class SharedModule {}
