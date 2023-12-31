import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authServices/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
  ) { }

  login(){
    this.authService.signIn(this.email, this.password)
    .then(() => console.log('logged in'))
    .catch(() => console.log('error'));

  }

}
