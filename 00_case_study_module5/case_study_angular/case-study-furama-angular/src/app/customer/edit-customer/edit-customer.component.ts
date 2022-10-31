import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  updateCustomer(): void {
    const product = this.customerForm.value;
    product.id = this.customerList.id;
    this.customerService.updateCustomer(product).subscribe(value => {
      alert('cập nhật thành công');
    }, error => {

    }, () => {
      this.router.navigateByUrl('/customer');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
