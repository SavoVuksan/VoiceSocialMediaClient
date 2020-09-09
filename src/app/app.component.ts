import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voice-social-media';
  debugMode = false;

  // Just for Debugging purposes
  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if((event.ctrlKey || event.metaKey) && event.code == 'KeyD'){
      this.debugMode = !this.debugMode;
      event.preventDefault();
    }
    
  }
}
