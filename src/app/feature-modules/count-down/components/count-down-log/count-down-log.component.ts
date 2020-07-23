import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-count-down-log',
  templateUrl: './count-down-log.component.html',
  styleUrls: ['./count-down-log.component.css'],
})
export class CountDownLogComponent implements OnInit {
  @Input() logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
