import { Component, input, signal, WritableSignal } from '@angular/core';

import { HeroComponent } from "../../shared/hero/hero.component";
import { MtgSearchComponent } from "./mtg-search/mtg-search.component";


@Component({
  selector: 'app-mtg',
  standalone: true,
  imports: [HeroComponent, MtgSearchComponent],
  templateUrl: './mtg.component.html',
  styleUrl: './mtg.component.css'
})
export default class MtgComponent {
  
}
