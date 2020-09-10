import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User;
  email: string;
  password: string;
  username: string;

  constructor(private http: HttpClient) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  signUp(user: User){

  }
  get diagnostics(){
    return JSON.stringify({email: this.email, password: this.password, username: this.username});
  }

}
