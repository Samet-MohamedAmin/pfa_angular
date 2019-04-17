import { Pipe, PipeTransform } from '@angular/core';

/**
 * transfroms an image source value to correct backgroundImage property.
 */
@Pipe({
  name: 'bgImage'
})
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
