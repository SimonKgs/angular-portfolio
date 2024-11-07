import { Component, inject, signal, input, OnInit, computed, effect } from '@angular/core';
import { MtgApiService } from '../../../services/mtg-api.service';
import { CardInterface } from '../../../interfaces/mtg-api.response.interface';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  

  public search = input.required<string>()
  public cards = signal<CardInterface[]|undefined>(undefined)
  #imageService = inject(MtgApiService)

  // using the effect to keep track of search signal and react with it changes
  constructor() {
    effect(() => {
      const searchValue = this.search();
      if (searchValue) {
        this.getCardsByName(searchValue);
      }
    });
  }
  
  getCardsByName(name: string): void {
    if (!name) return
    this.#imageService.searchCardByName(name)
      .subscribe( resp => {

        const transformedResponse = resp.cards.map( (card: any) => ({
          name: card.name,
          manaCost: card.manaCost,
          cmc:  card.cmc,
          colors: card.colors,
          colorIdentity:  card.colorIdentity,
          rarity: card.rarity,
          text: card.text,
          imageUrl: card.imageUrl,
        }))

        const uniqueCards = transformedResponse.filter((card: { name: string; }, index: number, self: any[]) => 
          index === self.findIndex((c: { name: string; }) => c.name === card.name)
        );

        this.cards.set(uniqueCards)
        console.log(this.cards());
        
      })
  }

}
