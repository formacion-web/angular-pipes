import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes';


  cadena = 'Esto es un literal.';
  numero:any = 25895.396;
  personas = [
    {
      id: '1',
      nombre: 'Albert',
      apellidos: 'García Carros'
    },
    {
      id: '2',
      nombre: 'Susana',
      apellidos: 'Montes Gómez'
    },
    {
      id: '3',
      nombre: 'Carmen',
      apellidos: 'Galeote Fernández'
    }
  ];

  birthday = new Date(1988, 3, 15);
  toggle = true; // start with true == shortDate
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  fecha = new Date();
  printDate = this.fecha;
  // fecha = Date.now();
   increaseDate(){
    //  this.fecha+=86400000;
     this.fecha.setDate(this.fecha.getDate() + 1);

     this.printDate = new Date(this.fecha);

      console.log(this.fecha);
   }

}
