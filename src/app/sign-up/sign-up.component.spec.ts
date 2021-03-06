import { async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule, FormControl, NgForm, NG_VALIDATORS, MinLengthValidator, NgModel } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { routes } from './../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let ngForm: NgForm;

  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent, NgForm, NgModel ],
      imports: [FormsModule, RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    ngForm = fixture.debugElement.query(By.css('form')).injector.get(NgForm);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    //router.initialNavigation();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update username in component', fakeAsync(()=>{
    let username: HTMLInputElement = fixture.nativeElement.querySelector('#username');
    username.value = 'Savo';
    username.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    tick();

    expect(component.username).toBe('Savo');

    component.username = 'Bozo';

    fixture.detectChanges();
    tick();

    expect(username.value).toBe('Bozo');
  }));

  it('should validate username', fakeAsync(() =>{
    let username: HTMLInputElement = fixture.nativeElement.querySelector('#username');
    
    expect(ngForm.controls['username'].errors?.required).not.toBeUndefined();

    username.value = 'sav';
    username.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    
    expect(ngForm.controls['username'].errors?.minlength).not.toBeUndefined();

    username.value = ' savo';
    username.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(ngForm.controls['username'].errors?.pattern).not.toBeUndefined();

    username.value = '1savo';
    username.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(ngForm.controls['username'].errors?.pattern).not.toBeUndefined();

    username.value = 'savo_20';
    username.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(ngForm.controls['username'].errors?.pattern).toBeUndefined();
  }));

  it('should require password and email', fakeAsync(() =>{
    let email = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    let password = fixture.nativeElement.querySelector('#password') as HTMLInputElement;

    
    expect(ngForm.controls[email.name].errors?.required).not.toBeUndefined('Username required!');
    expect(ngForm.controls[password.name].errors?.required).not.toBeUndefined('Password required!');
    
    email.value = 'savovuksan@gmail.com';
    email.dispatchEvent(new Event('input'));
    password.value = 'password';
    password.dispatchEvent(new Event('input'));

    expect(ngForm.controls[email.name].errors?.required).toBeUndefined();
    expect(ngForm.controls[password.name].errors?.required).toBeUndefined();
  }));

  it('should have a password min length of 6',()=>{
    let password : HTMLInputElement = fixture.nativeElement.querySelector('#password');

    password.value = '123';
    password.dispatchEvent(new Event('input'));

    expect(ngForm.controls[password.name].errors?.minlength).not.toBeUndefined();
  });

  it('should have submit button disabled when form is invalid', () =>{
    
    let submit: HTMLInputElement = fixture.nativeElement.querySelector('input[type="submit"]');
    fixture.detectChanges();
    
    expect(submit.disabled).toBeTruthy();
    
    ngForm.form.removeControl('password');
    ngForm.form.removeControl('username');
    ngForm.form.removeControl('email');
    fixture.detectChanges();
    
    expect(submit.disabled).toBeFalsy();
  });

  it('should navigate to /login when clicked on link',fakeAsync(()=>{
    let link: HTMLLinkElement = fixture.nativeElement.querySelector('a');
    link.click();
    tick();
    expect(location.path()).toBe('/auth/login');
  }));

  it('should navigate to /dashboard when signup was successful',fakeAsync(()=>{
     ngForm.form.removeControl('username');
     ngForm.form.removeControl('email');
     ngForm.form.removeControl('password');
     let submit: HTMLInputElement = fixture.nativeElement.querySelector('input[type="submit"]');
    
    submit.click();
    flush();
    
    expect(location.path()).toBe('/dashboard/timeline');
    
  }));
});
