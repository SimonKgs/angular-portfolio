import { Component, input, signal, OnInit, output, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  
  public search = input.required<string>()
  public onSearch = output<string>()
  

  onSearchCard(name: string): void {
    
    this.onSearch.emit(name);
    
  }

}
