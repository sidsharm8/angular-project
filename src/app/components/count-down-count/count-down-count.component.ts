import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-count-down-count',
  templateUrl: './count-down-count.component.html',
  styleUrls: ['./count-down-count.component.css'],
})
export class CountDownCountComponent implements OnInit {
  @Input() counter: { start: number; pause: number } = { start: 0, pause: 0 };
  constructor() {}

  ngOnInit(): void {}
}
