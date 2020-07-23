import { Component, OnInit } from '@angular/core';
import {
  StudentsService,
  Students,
  Student,
} from '../../../../services/students.service';
export type SortOrder = {
  orderList: string[];
  orderIndex: number;
  type: string | null;
};
@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
})
export class StudentsTableComponent implements OnInit {
  studentsList: Student[] = [];
  sortOrder: SortOrder = {
    orderList: ['original', 'asc', 'desc'],
    orderIndex: 0,
    type: null,
  };
  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.studentService.getStudentsData().subscribe({
      next: (data: Students) => {
        this.studentsList = data.students;
      },
      error: () => {},
    });
  }
  toggleOrder(type: string) {
    if (this.sortOrder.type === type) {
      //toggle order when type is same
      const {
        orderIndex,
        orderList: { length: orderListLength },
      } = this.sortOrder;
      this.sortOrder.orderIndex = (orderIndex + 1) % orderListLength;
    } else {
      // reset order
      this.sortOrder.type = type;
      this.sortOrder.orderIndex = 1;
    }
    //trigger pipe by changing the input reference
    this.sortOrder = { ...this.sortOrder };
  }
}
