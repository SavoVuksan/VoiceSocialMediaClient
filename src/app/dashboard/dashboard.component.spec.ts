import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ProfileComponent } from '../profile/profile.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from '../search/search.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { VoiceComponent } from '../voice/voice.component';
import { CreateVoiceComponent } from '../create-voice/create-voice.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture < DashboardComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [DashboardComponent,
          TimelineComponent,
          ProfileComponent,
          NotificationsComponent,
          SearchComponent,
          AudioPlayerComponent,
          VoiceComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
