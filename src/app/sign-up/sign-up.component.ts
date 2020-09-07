import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User;

  constructor(private http: HttpClient) {
    this.user = new User();
   }

  ngOnInit(): void {
  }

  signUp(user: User){

  }

}
