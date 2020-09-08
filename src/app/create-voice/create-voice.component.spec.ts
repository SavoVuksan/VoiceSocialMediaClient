import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoiceComponent } from './create-voice.component';

describe('CreateVoiceComponent', () => {
  let component: CreateVoiceComponent;
  let fixture: ComponentFixture<CreateVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
