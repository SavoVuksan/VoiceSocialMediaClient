import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  test: string;
  email: string;
  username: string;
  password: string;
  constructor() { }

  ngOnInit(): void {
  }
  //get diagnostics(){
  //  return JSON.stringify({username: this.username, email: this.email, password: this.password});
  //}
}
