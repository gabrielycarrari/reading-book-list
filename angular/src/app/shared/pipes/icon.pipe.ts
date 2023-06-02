import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'readed': return 'check_circle';
      case 'to-read': return 'add_circle';
      case 'reading': return 'pending';
      case 'to-be-continued': return 'pending';
    }
    return 'check_circle';
  }

}
