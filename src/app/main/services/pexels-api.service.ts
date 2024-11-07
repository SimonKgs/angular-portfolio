import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PexelsResp } from '../interfaces/pexels-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PexelsAPIService {

  #http = inject(HttpClient)
  #imageURL = 'https://api.pexels.com'

  searchGif(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${environment.PEXELS_KEY}`
    });
  
    // Create parameters with the query, per_page, and page
    const params = new HttpParams({
      fromObject: {
        query: query,
        per_page: '1',
      }
    });
        
    return this.#http.get<PexelsResp>(`${this.#imageURL}/v1/search`, { params, headers });

  }

}
