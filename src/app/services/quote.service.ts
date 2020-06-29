import { Injectable } from '@angular/core';
import { QuoteClass } from '../classes/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotes: QuoteClass[] = [];

  constructor() {
    this.quotes.push(new QuoteClass({ text: 'As a Jedi, we were trained to be keepers of the peace, not soldiers.', characters: ['Ahsoka Tano'], likes: 12 }));
    this.quotes.push(new QuoteClass({ text: 'It\'s over Anakin. I have the high ground!', characters: ['Obi-Wan Kenobi'] }));
    this.quotes.push(new QuoteClass({ text: '\"You would be wise to surrender.\"\n\"Yeah. Probably.\"', characters: ['Darth Vader', 'Cal Kestis'] }));
    this.quotes.push(new QuoteClass({ text: 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It\'s not a story the Jedi would tell you. It\'s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.', characters: ['Darth Sidious', 'Anakin Skywalker'] }));
    this.quotes.push(new QuoteClass({text: 'So this is how liberty dies... with thunderous applause', characters: ['Padme Amidala']}));
  }

  public getRandomQuote(prevQuote?: QuoteClass): Observable<QuoteClass> {
    return new Observable(observer => {
      let index: number;
      do {
        index = Math.floor(Math.random() * this.quotes.length);
      }
      while (this.quotes[index] == prevQuote && prevQuote);
      setTimeout(() => observer.next(this.quotes[index]), 1000);
    });
  }

  public upvoteQuote(quote: QuoteClass): Observable<QuoteClass> {
    return new Observable(observer => {
      setTimeout(() => {
        quote.likes++;
        observer.next(quote);
      }, 1000);
    });
  }

  public randomAboutCharacter(name: string): Observable<QuoteClass> {
    return new Observable(observer => {
      let index: number;
      do {
        index = Math.floor(Math.random() * this.quotes.length);
      }
      while (!this.quotes[index].characters.includes(name));
      setTimeout(() => observer.next(this.quotes[index]), 1000);
    });
  }

  public getAllCharacters(): Observable<string[]> {
    return new Observable(observer => {
      let ch = ['Ahsoka Tano', 'Anakin Skywalker', 'Darth Vader', 'Darth Sidious', 'Obi-Wan Kenobi', 'Cal Kestis'];
      setTimeout(() => observer.next(ch), 1000);
    });
  }

  public uploadQuote(quote: QuoteClass): Observable<QuoteClass> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(quote);
      }, 1000);
    });
  }

  public reportQuote(quote: QuoteClass): Observable<QuoteClass> {
    return this.getRandomQuote(quote);
  }
}
