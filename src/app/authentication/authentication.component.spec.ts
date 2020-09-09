import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AuthenticationComponent, SignUpComponent, LogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
