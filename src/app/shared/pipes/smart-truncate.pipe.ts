import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  transform(cadena: string, maxSize: number): string {
    let cadenaArray = cadena.split(' ');

    let fragment = cadena
                      .slice(0,maxSize)
                      .split(' ');

      console.log(fragment);
    let fragmentNewArray = fragment.filter(
                (element, index)=> element.length === cadenaArray[index].length);

    let newFragment = fragmentNewArray.join(' ');
    if(newFragment.length != cadena.length)
{    newFragment +='...';
    console.log(newFragment);
}
    return newFragment;
  }

}
