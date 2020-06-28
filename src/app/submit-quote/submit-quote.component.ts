import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {

  allCharacters: string[];

  quoteForm = new FormGroup({
    text: new FormControl('', Validators.required),
    characters: new FormControl()
  })

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteService.getAllCharacters().subscribe(ch => this.allCharacters = ch);
  }

  submitForm(){
    console.log(this.quoteForm);
  }

}
