import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { IntroductionComponent } from "./introduction/introduction.component";

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [HeroComponent, IntroductionComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export default class PersonalInfoComponent {

}
