import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  dummyArray: Array<Number>;
  constructor() { }

  ngOnInit(): void {
    this.dummyArray = new Array(5);
  }

}
