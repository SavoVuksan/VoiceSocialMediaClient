import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: String;
  password: String;

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }
  get diagnostics(){
    return JSON.stringify({email: this.email, password: this.password});
  }

}
