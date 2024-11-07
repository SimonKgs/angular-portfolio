import { Component, input, signal, WritableSignal } from '@angular/core';

import { HeroComponent } from "../../shared/hero/hero.component";
import { CommonModule } from '@angular/common';
import { CardListComponent } from "./card-list/card-list.component";
import { SearchComponent } from "./search/search.component";



@Component({
  selector: 'app-mtg',
  standalone: true,
  imports: [CommonModule, HeroComponent, CardListComponent, SearchComponent],
  templateUrl: './mtg.component.html',
  styleUrl: './mtg.component.css'
})
export default class MtgComponent {
  public search = signal<string>('')

  public searchCard(search: string) {
    if (!search) console.log("no search param");
    
    console.log("Search from mtgcomponent", search);
    this.search.set(search)
    console.log(this.search());
  }
  
  public updateSearchTerm = (newTerm: string) => {

    if (!newTerm) return
    
    console.log('newTerm', newTerm);
    
    this.search.set(newTerm);
  }
}
