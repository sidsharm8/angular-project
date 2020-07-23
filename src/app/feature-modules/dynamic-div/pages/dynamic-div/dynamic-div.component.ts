import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css'],
})
export class DynamicDivComponent implements OnInit, OnDestroy, AfterViewInit {
  list: any[] = [];
  clickSubscription: Subscription;
  scrollSubscription: Subscription;
  constructor() {}
  @ViewChild('dynamicButton') dynamicButton: ElementRef;
  ngOnInit(): void {
    this.list = this.createTempList(0);
  }
  ngAfterViewInit() {
    this.clickSubscription = fromEvent(
      this.dynamicButton.nativeElement,
      'click'
    )
      .pipe(
        map((e: MouseEvent) =>
          Number((e.target as HTMLButtonElement).dataset.index)
        )
      )
      .subscribe((index) => this.clickHandler(index));

    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe(() => this.onScrollHandler());
  }
  ngOnDestroy() {
    this.clickSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }

  clickHandler(index: number) {
    debugger;
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
