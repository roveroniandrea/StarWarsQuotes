import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../services/quote.service';
import { QuoteClass } from '../classes/quote';
import { MatDialog } from '@angular/material/dialog';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.css']
})
export class SubmitQuoteComponent implements OnInit {

  allCharacters: string[];
  isSubmitting = false;
  maxCharacters = 3;
  maxTextLength = 800;

  quoteForm = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.maxLength(this.maxTextLength)]),
    characters: new FormControl([], [Validators.required, Validators.maxLength(this.maxCharacters)])
  })

  constructor(private quoteService: QuoteService, private dialog: MatDialog, private submittedSnackBar: MatSnackBar, private router: Router) {
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
      this.submittedSnackBar.open('Submitted successfully!', '', { duration: 2000 });
      this.router.navigate(['/']);
    });
  }
}
