import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DefinitionResponse, Meaning } from '../interfaces/definition-response.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeDictionaryService {

  meanings: Meaning[] = [];

  #http = inject(HttpClient)
  #baseDefinitionApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'

  constructor() { }


  getDefinitionOf(word: string) {
    return this.#http.get<DefinitionResponse[]>(`${this.#baseDefinitionApiUrl}/${word}`)
        .pipe(
            tap(resp => console.log('API Response:', resp)), 
            map(resp => {
              const meanings = resp[0]?.meanings; // could have more than one i want the first one
              // Extract definitions from meanings and return it
              return meanings?.flatMap(meaning => meaning.definitions.map(def => def.definition)) || [];
          })
        );
  }
    
}
