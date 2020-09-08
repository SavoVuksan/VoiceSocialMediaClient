import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  dummy: Array<Number>;
  constructor() { }

  ngOnInit(): void {
    this.dummy = new Array(5);
  }
  
}
