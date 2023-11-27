import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [
        CommonModule,
        LoginComponent,
        SignupComponent,
    ],
    template: `<p>auth works!</p>`,
    styleUrls: ['./auth.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent { }
