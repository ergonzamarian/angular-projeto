import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsComponent } from './errors.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorsComponent, 
    NotFoundComponent]
})
export class ErrorsModule { }
