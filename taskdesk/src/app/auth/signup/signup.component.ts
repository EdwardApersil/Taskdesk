import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authServices/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string ='';
  password: string ='';

  constructor(
    private authService: AuthService
  ) { }

  signUp(){
    this.authService.signUp(this.email, this.password)
    .then(() => console.log('signed up'))
    .catch(() => console.log('error'));
  }

}
