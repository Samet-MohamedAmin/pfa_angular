import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgImage'
})
export class BackgroundImagePipe implements PipeTransform {

  transform(value: string): string {
    return value.startsWith('url(')? value : `url(${value})`;
  }

}
