import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, property: string): any {
    return value.sort((a, b) => {
      const propertyA = a[property];
      const propertyB = b[property];
      if (propertyA === propertyB) {
        return 0;
      } else {
        if (propertyA < propertyB) {
          return 1;
        } else {
          return -1;
        }
      }
    });
  }

}
