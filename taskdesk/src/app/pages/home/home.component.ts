import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
