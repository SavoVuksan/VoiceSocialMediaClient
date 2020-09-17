import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceComponent } from './voice.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { TrackLengthPipe } from '../track-length.pipe';

describe('VoiceComponent', () => {
  let component: VoiceComponent;
  let fixture: ComponentFixture<VoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceComponent, AudioPlayerComponent, TrackLengthPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
