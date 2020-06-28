import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../services/quote.service';
import { QuoteClass } from '../classes/quote';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {

  allCharacters: string[];
  isSubmitting = false;

  quoteForm = new FormGroup({
    text: new FormControl('', Validators.required),
    characters: new FormControl([], Validators.required)
  })

  constructor(private quoteService: QuoteService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.quoteService.getAllCharacters().subscribe(ch => this.allCharacters = ch);
  }

  openDialog() {
    let acceptDialog = this.dialog.open(DialogSubmitComponent, {});
    acceptDialog.afterClosed().subscribe(res => {
      if (res?.accept) {
        this.submitQuote();
      }
    });
  }

  submitQuote() {
    let newQuote: QuoteClass = new QuoteClass(this.quoteForm.value);
    this.isSubmitting = true;
    this.quoteService.uploadQuote(newQuote).subscribe(res => {
      this.isSubmitting = false;
    });
  }
}
