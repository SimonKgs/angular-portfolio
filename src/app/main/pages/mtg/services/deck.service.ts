import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { DeckInterface } from '../interfaces/mtg-interface';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  #http = inject(HttpClient)
  #url = "http://127.0.0.1:3000/decks"

  // BehaviorSubject that holds the current decks
  #decksSubject = new BehaviorSubject<DeckInterface[]>([]);
  public decks$ = this.#decksSubject.asObservable();

  constructor(){
    this.loadDecks()
  }

  // load all decks of the current
  loadDecks(): void {
    this.#http.get<DeckInterface[]>(this.#url).pipe(
      tap((decks) => this.#decksSubject.next(decks))
    ).subscribe();
  }

  getDecks(): Observable<DeckInterface[]> {
    return this.#http.get<DeckInterface[]>(`${this.#url}`);
  }

  // Get a single deck by its ID
  getDeckById(id: string): Observable<DeckInterface> {
    return this.#http.get<DeckInterface>(`${this.#url}/${id}`);
  }

  // Get a single deck by its name
  getDecksByName(name: string): Observable<DeckInterface[]> {
    return this.decks$.pipe(
      map((decks) => decks.filter(deck => deck.name.toLowerCase() === name.toLowerCase()))
    );
  }

  // Create a new deck and update the decks list
  createDeck(newDeck: DeckInterface): void {
    this.#http.post<DeckInterface>(this.#url, newDeck).pipe(
      tap((createdDeck) => {
        // Update decksSubject with the new deck list including the new deck
        const currentDecks = this.#decksSubject.value;
        this.#decksSubject.next([...currentDecks, createdDeck]);
      })
    ).subscribe();
  }

  updateDeck(){

  }

  deleteDeck() {

  }

}
