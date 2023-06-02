import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { IconPipe } from "./pipes/icon.pipe";
import { IconColorPipe } from './pipes/icon-color.pipe';



@NgModule({
  declarations: [
    IconPipe,
    IconColorPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    IconPipe,
    IconColorPipe
  ]
})
export class SharedModule { }
