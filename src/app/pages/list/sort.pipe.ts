import { Pipe, PipeTransform } from '@angular/core';

const SORT_MAP = {
  asc: 1,
  desc: -1,
};
@Pipe({ name: 'sortList' })
export class SortListPipe implements PipeTransform {
  transform(list: any[], sortOrder: string = 'asc') {
    return list.sort((a, b) => (a.id - b.id) * SORT_MAP[sortOrder]);
  }
}
