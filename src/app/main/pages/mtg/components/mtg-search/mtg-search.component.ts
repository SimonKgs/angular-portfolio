import { Component, signal } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { CardListComponent } from "../card-list/card-list.component";

@Component({
  selector: 'mtg-search',
  standalone: true,
  imports: [SearchComponent, CardListComponent],
  templateUrl: './mtg-search.component.html',
  styleUrl: './mtg-search.component.css'
})
export class MtgSearchComponent {
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
