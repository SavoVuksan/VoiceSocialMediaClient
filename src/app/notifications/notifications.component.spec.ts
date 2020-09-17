import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';
import { NotificationComponent } from '../notification/notification.component';
import { VoiceComponent } from '../voice/voice.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { TrackLengthPipe } from '../track-length.pipe';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsComponent, NotificationComponent, VoiceComponent, AudioPlayerComponent, TrackLengthPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
