import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }
  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
    
  }

  _fakeRestCall(): Promise<any>{
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve({status: 'success'});
      },100);
    });
  }

  submit(){
    this._fakeRestCall().then(status => {
      console.log(`Status ${status.status}`);
      if(status.status === 'success'){
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
  
  //get diagnostics(){
  //  return JSON.stringify({username: this.username, email: this.email, password: this.password});
  //}
}
