import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[];
  customerNameDelete: string;
  private customerIdDelete: number;
  private mess: string;
  customerNameSearch: '';


  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(value => {
      this.customer = value;
    }, error => {
    }, () => {
    });
  }

  getInfoProductDelete(name, id) {
    this.customerNameDelete = name;
    this.customerIdDelete = id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa khách hàng  [' + this.customerNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  searchByName() {
    this.customerService.findAll().subscribe(value => {
      this.customer = value.filter(item => item.name.toLowerCase().includes(this.customerNameSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
    });
  }
}
