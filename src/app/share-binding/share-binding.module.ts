import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionFirstChnageComponent } from './region-first-chnage/region-first-chnage.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ButtonRegionComponent } from './button-region/button-region.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegionFirstChnageComponent, ButtonRegionComponent],
  exports: [
RegionFirstChnageComponent,
ButtonRegionComponent,
CommonModule
  ]
})
export class ShareBindingModule { }