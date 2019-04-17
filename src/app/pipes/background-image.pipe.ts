import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgImage'
})
/**
 * transfroms an image source value to correct backgroundImage property.
 */
export class BackgroundImagePipe implements PipeTransform {
  
  /**
   * transfroms an image source value to correct backgroundImage property.
   * ie: with given source image `src` transforms it to `url(src)` 
   * @param value image source
   */
  transform(value: string): string {
    return value.startsWith('url(')? value : `url(${value})`;
  }

}
