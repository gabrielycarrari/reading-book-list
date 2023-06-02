import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { StatusPipe } from "./pipes/status.pipe";



@NgModule({
  declarations: [
    StatusPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    StatusPipe
  ]
})
export class SharedModule { }
