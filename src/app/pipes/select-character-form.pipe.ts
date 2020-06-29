import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectCharacterForm'
})
export class SelectCharacterFormPipe implements PipeTransform {

  transform(characters: string[]): string {
    let res = '';
    for(let i=0; i < characters?.length; i++){
      res += characters[i];
      if(i != characters.length - 1){
        res += ', ';
      }
    }
    return res;

  }

}
