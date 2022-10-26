import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ProductService} from 'src/app/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  productForm: FormGroup;
  productId: number;
  product: Product;
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.productId = Number(value.get('productId'));
    });
    this.productService.findById(this.productId).subscribe(value => {
      this.product = value;
      this.productForm.patchValue(this.product);
    });
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  updateProduct(): void {
    const product = this.productForm.value;
    product.id = this.product.id;
    this.productService.saveProduct(product).subscribe(value => {
      alert('cập nhật thành công');
    }, error => {

    }, () => {
      this.router.navigateByUrl('/product/list');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
