import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list: any[] = [];
  sortOrder: string = 'asc';
  cols: number = 4;
  columnStyling: string = 'repeat(4, 1fr)';

  constructor() {
    this.list = new Array(50);
    for (let i = 0; i < this.list.length; i++) {
      this.list[i] = {
        id: i,
      };
    }
  }

  updateColumnStyling(cols: number) {
    this.cols = cols;
    this.columnStyling = `repeat(${cols}, 1fr)`;
  }
}
