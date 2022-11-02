import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {BehaviorSubject, Observable} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  customerList$: Observable<Customer[]>;
  total$: Observable<number>;

  customers: Customer[] = [];
  customerNameDelete: string;
  private customerIdDelete: number;
  private mess: string;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.paginate();
  }

  paginate() {
    this.customerService.paginate(this.page, this.pageSize).subscribe(data => {
      console.log(data);
      this.customerList$ = new BehaviorSubject<Customer[]>(data.content);
      this.total$ = new BehaviorSubject<number>(data.totalElements);
    });
  }

  getInfoProductDelete(name: string, id: number): void {
    this.customerNameDelete = name;
    this.customerIdDelete = id;
  }


  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {

      Swal.fire({
        title: 'Xóa thành công!',
        text: 'khách hàng :' + this.customerNameDelete,
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
