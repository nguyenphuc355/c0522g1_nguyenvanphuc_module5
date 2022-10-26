import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('')
  });
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              protected categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
  }

  submit(): void {
    const product = this.productForm.value;
    this.productService.saveNewProduct(product).subscribe(value => {
      this.productForm.reset();
      alert('Tạo mới thành công');
    }, error => {

    }, () => {
      this.router.navigateByUrl('/product/list');
    });
  }
}
