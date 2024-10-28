import { ChangeDetectionStrategy, Component, inject, input, signal, OnInit } from '@angular/core';
import { DefinitionResponse } from '../../../interfaces/definition-response.interface';
import { FreeDictionaryService } from '../../../services/free-dictionary.service';

@Component({
  selector: 'app-definitions',
  standalone: true,
  imports: [],
  templateUrl: './definitions.component.html',
  styleUrl: './definitions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DefinitionsComponent implements OnInit{
  

  public word = input.required<string>();

  meanings = signal<string[] | undefined>(undefined);
  error: string | null = null;

  #dictionaryService = inject(FreeDictionaryService)

  ngOnInit(): void {
    this.getDefinition()
  }


  getDefinition(): void {
    this.#dictionaryService.getDefinitionOf(this.word()).subscribe({
      next: (definitions) => {
          this.meanings.set(definitions);
      },
      error: (err) => {
          this.error = 'Error fetching the definition. Please try again.';
          console.error('Error fetching definitions:', err);
      }
    });
  }
}
