import {Component, OnInit} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {
  student = [];

  constructor() {
  }

  ngOnInit():  void {
    this.student.push(new Student(1,'Huynh Van Nam','1993-10-10',0) );
    this.student.push(new Student(2,'Huynh Trung Thuyen','1993-10-10',0) );
    this.student.push(new Student(3,'Nguyen Tat Thanh','1993-10-10',2) );
    this.student.push(new Student(4,'Nguyen Van Phuc','1993-10-10',1) );
    this.student.push(new Student(5,'Hoang Minh Tri','1993-10-10',1) );
  }

}
