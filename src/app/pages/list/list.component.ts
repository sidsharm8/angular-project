import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list: any[] = [];
  cols: number = 4;
  sortOrder: string = 'asc';

  constructor() {
    this.list = new Array(50);
    for (let i = 0; i < this.list.length; i++) {
      this.list[i] = {
        id: i,
      };
    }
  }

  getColumnsStyling() {
    return `repeat(${this.cols}, 1fr)`;
  }

  updateColumnStyling(cols: number) {
    this.cols = cols;
  }
}
