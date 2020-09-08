import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentVoiceComponent } from './comment-voice.component';

describe('CommentVoiceComponent', () => {
  let component: CommentVoiceComponent;
  let fixture: ComponentFixture<CommentVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentVoiceComponent ]
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
