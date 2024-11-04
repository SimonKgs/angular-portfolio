import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { CvComponent } from "./cv/cv.component";

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [HeroComponent, IntroductionComponent, CvComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export default class PersonalInfoComponent {

}
