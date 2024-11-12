import { Component, signal } from '@angular/core';
import { SearchComponent } from "../search-controls/search-controls.component";
import { CardListComponent } from "../card-list/card-list.component";

@Component({
  selector: 'mtg-search',
  standalone: true,
  imports: [CardListComponent, SearchComponent],
  templateUrl: './mtg-search.component.html',
  styleUrl: './mtg-search.component.css'
})
export class MtgSearchComponent {
  public search = signal<string>('')

  public searchCard(search: string) {
    if (!search) console.log("no search param");
    this.search.set(search)
  }
  
  public updateSearchTerm = (newTerm: string) => {

    if (!newTerm) return
    
    this.search.set(newTerm);
  }
}
