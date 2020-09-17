import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, AfterViewInit {


  audio: HTMLMediaElement;
  trackLength: number;
  trackPosition: number;
  trackCompletion: number;
  loop: number = 0;
  drag: boolean = false;

  @ViewChild('progressbar')
  progressBar: ElementRef;
  @ViewChild('knob')
  knob: ElementRef;

  constructor() {
    this.audio = new Audio('./../../assets/TestMessage.wav');
    this.trackPosition = this.audio.currentTime;
    this.audio.onloadedmetadata = () => {
      this.trackLength = this.audio.duration;

    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}


  play() {
    if (this.audio.paused) {
      this.audio.play();

      if (this.loop === 0) {
        this.loop = setInterval(() => {
          this.update();
        }, 1000 / 60);
      }
    }else{
      this.audio.pause();
    }
  }

  update() {
    this.trackPosition = this.audio.currentTime;
    this.trackCompletion = this.trackPosition / this.trackLength * 100;
    this.updateStyle();
  }
  updateStyle() {
    (this.progressBar.nativeElement as HTMLDivElement).style.width = this.trackCompletion + '%';
    (this.knob.nativeElement as HTMLButtonElement).style.left = this.trackCompletion + '%';
  }

  setProgress(event: MouseEvent) {
    if(this.drag){
    this.audio.currentTime = this.trackLength * event.offsetX / (event.target as HTMLElement).clientWidth;
    this.update();
    }
  }

}
