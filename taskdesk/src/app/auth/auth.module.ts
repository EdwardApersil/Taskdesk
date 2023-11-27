import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './authServices/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthService
  ]
})
export class AuthModule { }
