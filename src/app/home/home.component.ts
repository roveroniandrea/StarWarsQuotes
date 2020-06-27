import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  randomQuote: QuoteClass = null;
  quoteLiked = false;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(){
    this.quoteService.getRandomQuote(this.randomQuote).subscribe(
      (quote: QuoteClass) => {
        this.randomQuote = quote;
        this.quoteLiked = false;
      }
    );
  }

  upvoteQuote(){
    if(!this.quoteLiked && this.randomQuote){
      this.quoteService.upvoteQuote(this.randomQuote).subscribe(
        () => this.quoteLiked = true
      );
    }
  }

  getRandomAboutCharacter(name: string){
    this.quoteService.randomAboutCharacter(name).subscribe(
      (quote: QuoteClass) => {
        this.randomQuote = quote;
        this.quoteLiked = false;
      }
    );
  }
}
