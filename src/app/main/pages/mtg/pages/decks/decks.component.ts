import { Component, inject, signal } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { DeckInterface } from '../../interfaces/mtg-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export default class DecksComponent {

  
  public decks = signal<DeckInterface[]>([]); // Observable of decks 
  private deckSubscription: Subscription | undefined;    // To manage the subscription
   
  #deckService = inject(DeckService);

  ngOnInit(): void {
    // Subscribe to the decks$ observable from the service
    this.deckSubscription = this.#deckService.decks$.subscribe((decks) => {
      this.decks.set(decks);
    });
  }

  ngOnDestroy(): void {
    // Cleanup subscription to avoid memory leaks
    if (this.deckSubscription) {
      this.deckSubscription.unsubscribe();
    }
  }

  // to search by name
  // searchTerm: string = '';
  // filteredDecks: DeckInterface[] = [];
  // searchDecks() {
  //   this.#deckService.getDecksByName(this.searchTerm).subscribe((decks) => {
  //     this.filteredDecks = decks;
  //   });
  // }

}
