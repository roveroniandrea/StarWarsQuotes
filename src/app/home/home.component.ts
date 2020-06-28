import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';
import { QuoteService } from '../services/quote.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false => true', animate(1500)),
      transition('true => false', animate(100))
    ])
  ]
})
export class HomeComponent implements OnInit {

  randomQuote: QuoteClass = null;
  quoteLiked = false;
  fadeIn = true;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.fadeIn = false;
    this.quoteService.getRandomQuote(this.randomQuote).subscribe(
      (quote: QuoteClass) => {
        this.randomQuote = quote;
        this.quoteLiked = false;
        this.fadeIn = true;
      }
    );
  }

  upvoteQuote() {
    if (!this.quoteLiked && this.randomQuote) {
      this.quoteService.upvoteQuote(this.randomQuote).subscribe(
        () => this.quoteLiked = true
      );
    }
  }

  getRandomQuoteAboutCharacter(name: string) {
    if(name){
      this.quoteService.randomAboutCharacter(name).subscribe(
        (quote: QuoteClass) => {
          this.randomQuote = quote;
          this.quoteLiked = false;
        }
      );
    }
  }
}
