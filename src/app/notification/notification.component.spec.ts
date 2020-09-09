import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { VoiceComponent } from '../voice/voice.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent, VoiceComponent, AudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
