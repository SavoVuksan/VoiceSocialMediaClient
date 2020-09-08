import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  dummy: Array<Number>;
  constructor() { }

  ngOnInit(): void {
    this.dummy = new Array(5);
  }

}
