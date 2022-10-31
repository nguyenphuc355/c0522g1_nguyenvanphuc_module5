import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  });
  customerType: CustomerType[];

  constructor(private customerService: CustomerService,
              protected customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerType = value;
    });
  }
  submit(): void {
    const product = this.customerForm.value;
    this.customerService.saveCustomer(product).subscribe(value => {
      this.customerForm.reset();
      alert('Tạo mới thành công');
    }, error => {

    }, () => {
      this.router.navigateByUrl('/customer');
    });
  }
}
