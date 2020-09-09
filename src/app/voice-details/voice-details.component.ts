import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-details',
  templateUrl: './voice-details.component.html',
  styleUrls: ['./voice-details.component.scss']
})
export class VoiceDetailsComponent implements OnInit {
  dummy: Array<Number>;
  constructor() { }

  ngOnInit(): void {
    this.dummy = new Array(5);
  }

}
