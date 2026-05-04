import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true })
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    if (!minutes || minutes < 0) return '';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 && m > 0 ? `${h}h ${m}min` : h > 0 ? `${h}h` : `${m}min`;
  }
}
