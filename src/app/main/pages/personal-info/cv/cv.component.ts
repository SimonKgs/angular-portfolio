import { Component } from '@angular/core';
import { HeaderComponent } from "./cv-header/cv-header.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
