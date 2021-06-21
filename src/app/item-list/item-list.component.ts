import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  stuff: Array<Object> = [];
  pattern!: string;

  constructor() { }

  addItem(item:string) {
    this.stuff.push({name: item});
    console.log(this.stuff);
  }
  ngOnInit(): void {
  }

}
