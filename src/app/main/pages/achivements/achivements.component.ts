import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/hero/hero.component";

@Component({
  selector: 'app-achivements',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.css'
})
export default class AchivementsComponent {

}
