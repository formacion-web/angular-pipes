import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {


  transform(cadena: string): any{



    try {

      return cadena
        .split(' ')
        .map(elemento => elemento
        .split('')[0]
        .toUpperCase()
        .concat(elemento
        .slice(1)))
        .join(' ');

    } catch (error) {

      throw ('Capitalize Error');
    }

  }

}

