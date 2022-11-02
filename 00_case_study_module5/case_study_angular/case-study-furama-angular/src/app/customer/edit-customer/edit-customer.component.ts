import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerId: number;
  customerList: Customer;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.customerId = Number(value.get('customerId'));
    });
    this.customerService.findById(this.customerId).subscribe(value => {
      this.customerList = value;
      this.customerForm.patchValue(this.customerList);
    });
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    });
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required),
    });
  }

  updateCustomer(id: number): void {
    const customer = this.customerForm.value;
    customer.id = this.customerList.id;
    this.customerService.updateCustomer(id, customer).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Khách hàng: ' + customer.customerName,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
      });
      this.router.navigateByUrl('/customers');
    }, error => {

    }, () => {

    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
