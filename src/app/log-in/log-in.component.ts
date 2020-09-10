import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  // TODO: Implement proper login!
  login(){
    let u = new User("savovuk", this.email);
    u.id = 1;
    this.router.navigate(['dashboard']); 
    return u;
  }

}
