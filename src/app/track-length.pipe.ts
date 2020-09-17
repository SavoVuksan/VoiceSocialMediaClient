import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackLength'
})
export class TrackLengthPipe implements PipeTransform {

  transform(value: number): string {
    const rounded = Math.round(value);
    const min = Math.floor(rounded / 60);
    const sec = rounded % 60;
    return `${min}:${this.format(sec)}`;
  }

  format(num: number): string{
    return num >= 10 ? num.toString() : '0'+num.toString();
  }
}
