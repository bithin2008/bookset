import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from "./my-account.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
