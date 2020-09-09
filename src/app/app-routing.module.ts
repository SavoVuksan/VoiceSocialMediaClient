import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent  } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { VoiceDetailsComponent } from './voice-details/voice-details.component';
import { CommentVoiceComponent } from './comment-voice/comment-voice.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path: 'auth', component: AuthenticationComponent, children: [
    {path: 'login', component: LogInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ]},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'timeline', component: TimelineComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'voiceDetails', component: VoiceDetailsComponent},
    {path: 'comment', component: CommentVoiceComponent},
    {path: '', redirectTo: 'timeline', pathMatch: 'full'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
