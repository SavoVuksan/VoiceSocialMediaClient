import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send data to the server when login btn is pressed', () => {
    let email = "savovuksan@gmail.com";
    let password = "password";
    let u = component.login();
    expect(u.id).toBe(1);
  });
  it(' should route to the dashboard after successful login', () => {
    let email = "savovuksan@gmail.com";
    let password = "password";
    spyOn(component.router,'navigate');
    let u = component.login();
    expect(component.router.navigate).toHaveBeenCalled();
    
  });
  xit('should navigate to SignUp Component when clicking Sign Up', fakeAsync(()=>{
    let link = fixture.nativeElement.querySelector('a');
    link.click();

    tick();
    expect(location.pathname).toBe('/auth/signup');
  }));
});
