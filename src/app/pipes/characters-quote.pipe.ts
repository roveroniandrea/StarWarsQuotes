import { Pipe, PipeTransform } from '@angular/core';
import { QuoteClass } from '../classes/quote';

@Pipe({
  name: 'charactersQuote'
})
export class CharactersQuotePipe implements PipeTransform {

  transform(value: QuoteClass, ...args: unknown[]): string {
    let res = '- ';
    for(let i = 0; i < value.characters.length; i++){
      res += value.characters[i];
      if(i != value.characters.length - 1){
        res += ',';
      }
      res += ' ';
    }
    return res;
  }

}
