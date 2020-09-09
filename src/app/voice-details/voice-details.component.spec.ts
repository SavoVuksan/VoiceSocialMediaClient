import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceDetailsComponent } from './voice-details.component';
import { VoiceComponent } from '../voice/voice.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

describe('VoiceDetailsComponent', () => {
  let component: VoiceDetailsComponent;
  let fixture: ComponentFixture<VoiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceDetailsComponent, VoiceComponent, AudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
