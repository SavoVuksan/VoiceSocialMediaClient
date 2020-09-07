import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { User } from '../user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let http: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpTestingController);
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
});
