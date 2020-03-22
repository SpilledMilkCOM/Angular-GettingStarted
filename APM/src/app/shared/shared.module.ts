import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // This is needed for *ngIf and *ngFor, and you can't import the BrowserModule here.
import { StarComponent } from './start.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
