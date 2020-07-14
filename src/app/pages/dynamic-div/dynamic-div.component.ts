import { Component, OnInit, OnDestroy } from '@angular/core';
import { throttle } from 'lodash';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
})
export class DynamicDivComponent implements OnInit, OnDestroy {
  list: any[] = [];
  throttledScrollHandler: () => void;
  constructor() {}

  ngOnInit(): void {
    this.list = this.createTempList(0);
    this.throttledScrollHandler = throttle(
      this.onScrollHandler.bind(this),
      500
    );
    window.addEventListener('scroll', this.throttledScrollHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.throttledScrollHandler);
  }

  clickHandler(index: number) {
    window.alert(`Button in ${index + 1}th div clicked`);
  }
  createTempList(startIndex: number) {
    let list = [];
    // create a temp list with 10 elements
    for (let i = startIndex; i < startIndex + 10; i++) {
      list.push({
        id: i,
      });
    }
    return list;
  }
  onScrollHandler() {
    // scroll within 100px from the bottom
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 100
    ) {
      // create a temp list to append to bottom
      const startIndex = this.list.length;
      this.list = this.list.concat(this.createTempList(startIndex));
      console.log(this.list);
    }
  }
}
