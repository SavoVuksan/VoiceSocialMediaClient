import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'voice-social-media'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('voice-social-media');
  });

  it('should have debug mode disabled by startup', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.debugMode).toBeFalsy();
  });

  it('should toggle Debug Mode with Ctrl + D shortcut', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const event = new KeyboardEvent("keydown",{code: "KeyD", ctrlKey: true});
    window.dispatchEvent(event);
    
    expect(app.debugMode).toBeTruthy();

  });


});
