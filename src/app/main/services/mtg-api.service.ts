import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MtgApiService {

  #http = inject(HttpClient)
  #imageURL = 'https://api.magicthegathering.io'

  searchCardByName(name: string): Observable<any> {
    
    const params = new HttpParams({
      fromObject: {
        name,
      }
    });
        
    return this.#http.get(`${this.#imageURL}/v1/cards`, { params });

  }

}
