import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IPApiService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    
  ) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'https://jsonplaceholder.typicode.com/posts/1';  // URL to web api
  getHeroes() {
    return this.http.get(this.heroesUrl)
  }
}
