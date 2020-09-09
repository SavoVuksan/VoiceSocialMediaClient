import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentVoiceComponent } from './comment-voice.component';
import { VoiceComponent } from '../voice/voice.component';
import { CreateVoiceComponent } from '../create-voice/create-voice.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

describe('CommentVoiceComponent', () => {
  let component: CommentVoiceComponent;
  let fixture: ComponentFixture<CommentVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentVoiceComponent, VoiceComponent, CreateVoiceComponent, AudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
