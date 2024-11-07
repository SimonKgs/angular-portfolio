import { Component, Input } from '@angular/core';
import { CardInterface } from '../../../../interfaces/mtg-api.response.interface';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) card!: CardInterface;


}
