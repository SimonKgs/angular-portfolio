import { Component, inject, signal } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { DeckInterface } from '../../interfaces/mtg-interface';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule ],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.css'
})
export default class DecksComponent {

  
  public decks = signal<DeckInterface[]>([]); // Observable of decks 
  private deckSubscription: Subscription | undefined;    // To manage the subscription
  public openModal = signal<boolean>(true) 

  #deckService = inject(DeckService);

  // form
  private fb = inject(FormBuilder)

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]]
  })

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

  createDeck(){
    console.log(this.myForm.value.name);
    console.log(this.decks().length);
    const newDeck: DeckInterface = {
      id: (this.decks().length + 1).toString(),
      name: this.myForm.value.name
    }

    this.#deckService.createDeck(newDeck)
    
    this.myForm.reset()
    this.openCloseModal()
  }

  openCloseModal() {
    this.openModal.set(!this.openModal())
    console.log(this.openModal());
  }

  
}
