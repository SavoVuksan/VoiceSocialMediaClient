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

  _fakeRestCall(){
    return new Promise(resolve =>{
      setTimeout(() => {
        resolve('success');
      }, 100);
    })
  }
  // TODO: Implement proper login!
  login(){
    this._fakeRestCall().then(msg=> {
      if(msg === 'success'){
        this.router.navigate(['dashboard']); 
      }
    })
  }

}
