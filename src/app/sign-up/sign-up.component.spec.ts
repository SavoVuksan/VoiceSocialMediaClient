import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { User } from '../user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { Location } from '@angular/common';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let http: HttpTestingController;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent, LogInComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpTestingController);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send data to sever', () =>{
    let user = new User();
    user.email = 'savovuksan@gmail.com';
    user.password = 'password';
    user.username = 'savovuk';
    component.signUp(user);
  });
  it('should have a User object', () =>{
    expect(component.user).not.toBeUndefined();
  });

  xit('should direct to Login Component when clicking the Login Link', fakeAsync(() =>{
      let link = fixture.nativeElement.querySelector('a');
      link.click();
      tick();
      expect(location.path).toBe('auth/login');
  }));
});
