import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Customer} from '../../model/customer';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  employeeList$: Observable<Employee[]>;
  total$: Observable<number>;

  employees: Employee[] = [];
  employeeNameDelete: string;
  private employeeIdDelete: number;
  private mess: string;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.employeeService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.employeeList$ = new BehaviorSubject<Employee[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
    });
  }

  getInfoProductDelete(name: string, id: number): void {
    this.employeeNameDelete = name;
    this.employeeIdDelete = id;
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employeeIdDelete).subscribe(() => {

      Swal.fire({
        title: 'Xóa thành công!',
        text: 'khách hàng :' + this.employeeNameDelete,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }
}
