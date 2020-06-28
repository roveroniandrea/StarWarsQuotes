import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';
import { QuoteService } from '../services/quote.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('*', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false => true', animate(1500)),
      transition('true => false', animate(100)),
      transition('void => true', animate(1500)),
    ])
  ]
})
export class HomeComponent implements OnInit {

  randomQuote: QuoteClass = null;
  quoteLiked = false;
  fadeIn = true;

  constructor(private quoteService: QuoteService, private reportSnakBar: MatSnackBar) { }

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
    if (name) {
      this.quoteService.randomAboutCharacter(name).subscribe(
        (quote: QuoteClass) => {
          this.randomQuote = quote;
          this.quoteLiked = false;
        }
      );
    }
  }

  reportQuote() {
    if (this.randomQuote) {
      this.fadeIn = false;
      this.quoteService.reportQuote(this.randomQuote).subscribe((newQuote: QuoteClass) => {
        this.randomQuote = newQuote;
        this.quoteLiked = false;
        this.fadeIn = true;
        this.reportSnakBar.open('Quote has been reported', '', { duration: 2000 });
      });
    }
  }
}
