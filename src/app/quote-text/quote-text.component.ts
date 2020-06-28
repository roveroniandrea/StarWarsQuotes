import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from '../classes/quote';

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {
  @Input() quote: QuoteClass;

  constructor() { }

  ngOnInit(): void {
  }

}
