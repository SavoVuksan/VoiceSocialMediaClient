import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush
} from '@angular/core/testing';
import {
  FormsModule, NgForm
} from '@angular/forms';
import {
  LogInComponent
} from './log-in.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  Router
} from '@angular/router';
import {
  DashboardComponent
} from '../dashboard/dashboard.component';
import {
  routes
} from '../app-routing.module';
import {
  Location
} from '@angular/common';
import { By } from '@angular/platform-browser';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture < LogInComponent > ;
  let router: Router;
  let location: Location;


  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [LogInComponent],
        imports: [FormsModule, RouterTestingModule.withRoutes(routes)]
      })
      .compileComponents();
  }));

  beforeEach(async (() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to SignUp Component when clicking Sign Up link', fakeAsync(() => {
    let link = fixture.nativeElement.querySelector('a');
    link.click();

    tick();
    expect(location.path()).toBe('/auth/signup');
  }));
  it('should navigate to Dashboard when login was successful', fakeAsync(() => {
    let ngForm: NgForm = fixture.debugElement.query(By.css('form')).injector.get(NgForm);
    let submit: HTMLInputElement = fixture.nativeElement.querySelector('input[type="submit"]');
    
    fixture.detectChanges();
    ngForm.form.removeControl('email');
    ngForm.form.removeControl('password');
    fixture.detectChanges();
    expect(submit.disabled).toBeFalse();

    submit.click();
    flush();
    expect(location.path()).toBe('/dashboard/timeline');
  }));


});
