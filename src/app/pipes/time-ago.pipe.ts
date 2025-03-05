import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: Date): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - value.getTime()) / 60000);
    if (diff < 60) return `${diff} minutes ago`;
    return `${Math.floor(diff / 60)} hours ago`;
  }
}
