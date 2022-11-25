import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    const product = this.productForm.value;
    this.productService.saveNewProduct(product).subscribe(value => {
      this.productForm.reset();
    }, error => {

    }, () => {
      this.router.navigateByUrl('');
    });
  }
}
