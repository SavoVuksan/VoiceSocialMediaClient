import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateVoiceComponent } from './create-voice/create-voice.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { TimelineComponent } from './timeline/timeline.component';
import { VoiceComponent } from './voice/voice.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { CommentVoiceComponent } from './comment-voice/comment-voice.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AuthenticationComponent,
    LogInComponent,
    CreateVoiceComponent,
    AudioPlayerComponent,
    TimelineComponent,
    VoiceComponent,
    ViewUserComponent,
    DashboardComponent,
    NotificationsComponent,
    NotificationComponent,
    CommentVoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
