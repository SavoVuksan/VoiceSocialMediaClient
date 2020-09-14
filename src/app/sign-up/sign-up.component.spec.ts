import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule, FormControl, NgForm, NG_VALIDATORS, MinLengthValidator, NgModel } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let usernameModel: NgModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent, NgForm, NgModel ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    usernameModel = fixture.debugElement.query(By.css('#username')).injector.get(NgModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change test var in component to test',() =>{
    const input: HTMLInputElement = fixture.nativeElement.querySelector('#test');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    console.log(component.test);
    expect(component.test).toBe('test');
  });

  it('should test username validator when input is 3 character long',()=>{
    const inputDE = fixture.debugElement.query(By.css('#username'));
    component.username = 'usr';
    const model = inputDE.injector.get(NgModel);
    model.statusChanges.subscribe((val) =>{
      console.log(val);
    });
    
    //console.log(model.status,model.valid,model.value,model.model,model.control.valid);
    
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      console.log(model);
      console.log(model.status,model.valid,model.value,model.model,model.control.valid);
    });
    
   
  });

  it('should test ngModel on username async', ()=>{
    const inputDE = fixture.debugElement.query(By.css('#username'));
    const input = fixture.nativeElement.querySelector('#username') as HTMLInputElement;
    const formDE = fixture.debugElement.query(By.css('form'));
    const form = formDE.nativeElement as HTMLFormElement;
    const ngForm = formDE.injector.get(NgForm);

    input.value = 'usrrrr';
    input.dispatchEvent(new Event('focus'));
    input.dispatchEvent(new Event('input'));
    

    fixture.detectChanges();
   
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      console.log("FORM");
      console.log(ngForm);
    });
    console.log(component.username, ngForm, formDE);

  });
});
