import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../services/students.service';
import { SortOrder } from './students-table.component';
const SORT_MAP = {
  asc: 1,
  desc: -1,
};
@Pipe({
  name: 'sortStudents',
})
export class SortStudentsPipe implements PipeTransform {
  originalList: Student[] = [];
  transform(list: Student[], sortOrder: SortOrder): Student[] {
    const { orderList, orderIndex, type } = sortOrder;
    if (orderList[orderIndex] !== 'original') {
      return list.sort((a, b) => {
        if (typeof a[type] === 'string' && typeof b[type] === 'string') {
          // for sorting of strings
          return (
            a[type].localeCompare(b[type]) * SORT_MAP[orderList[orderIndex]]
          );
        }
        //for sorting of numbers
        return (a[type] - b[type]) * SORT_MAP[orderList[orderIndex]];
      });
    } else {
      if (!this.originalList.length) {
        // internally maintains a copy of original list
        this.originalList = [...list];
      } else {
        return this.originalList;
      }
    }
    return list;
  }
}
