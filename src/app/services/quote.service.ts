import { Injectable } from '@angular/core';
import { QuoteClass } from '../classes/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotes: QuoteClass[] = [];

  constructor() {
    this.quotes.push({ text: 'As a Jedi, we were trained to be keepers of the peace, not soldiers.', characters: ['Ahsoka Tano'], likes: 0 });
    this.quotes.push({ text: 'It\'s over Anakin. I have the high ground!', characters: ['Obi-Wan Kenobi'], likes: 0 });
    this.quotes.push({text: '\"You would be wise to surrender.\"\n\"Yeah. Probably.\"', characters:['Darth Vader', 'Cal Kestis'], likes: 0});
  }

  public getRandomQuote(prevQuote?: QuoteClass): Observable<QuoteClass> {
    return new Observable(observer => {
      let index: number;
      do {
        index = Math.floor(Math.random() * this.quotes.length);
      }
      while (this.quotes[index] == prevQuote && prevQuote)
      observer.next(this.quotes[index]);
    });
  }

  public upvoteQuote(quote: QuoteClass): Observable<QuoteClass> {
    return new Observable(observer => {
      quote.likes++;
      observer.next(quote);
    });
  }

  public randomAboutCharacter(name: string): Observable<QuoteClass> {
    return new Observable(observer => {
      let index: number;
      do {
        index = Math.floor(Math.random() * this.quotes.length);
      }
      while (!this.quotes[index].characters.includes(name));
      observer.next(this.quotes[index]);
    });
  }
}
