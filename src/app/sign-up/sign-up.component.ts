import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  test: string;
  email: string;
  username: string;
  password: string;
  constructor() { }
  ngAfterViewInit(): void {
   
  }
  
  ngOnInit(): void {
    
  }
  
  //get diagnostics(){
  //  return JSON.stringify({username: this.username, email: this.email, password: this.password});
  //}
}
