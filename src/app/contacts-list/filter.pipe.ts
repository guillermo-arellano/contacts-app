import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from './model';

@Pipe({
  name: 'favoritesFilter$'
})
export class FilterPipe implements PipeTransform {

  transform(items$: Observable<Contact[]>, criteria: boolean): any {
    if (!items$) return undefined;
    return items$.map(item => item.filter(<Contact>(x) => x.isFavorite === criteria));;
  }

}
