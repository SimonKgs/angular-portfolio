import { Component, input, output } from '@angular/core';

@Component({
  selector: 'mtg-search-controls',
  standalone: true,
  imports: [],
  templateUrl: './search-controls.component.html',
  styleUrl: './search-controls.component.css'
})
export class SearchComponent  {
  
  public search = input.required<string>()
  public onSearch = output<string>()
  

  onSearchCard(name: string): void {
    
    this.onSearch.emit(name);
    
  }

}
