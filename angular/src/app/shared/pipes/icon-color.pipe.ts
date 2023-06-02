import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconColor'
})
export class IconColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'readed':
        return 'rgba(42, 176, 100'; // Cor para status "readed"
      case 'reading':
        return 'rgba(3, 169, 252'; // Cor para status "reading"
      case 'to-read':
        return 'rgba(247, 209, 69'; // Cor para status "to-read"
      case 'to-be-continued':
        return 'rgba(247, 209, 69';
      default:
        return 'rgba(117, 117, 117';
    }
  }

}
