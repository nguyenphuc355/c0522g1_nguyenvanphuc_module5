import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {IProduct} from '../../model/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(value => {
      this.product = value;
    }, error => {
    }, () => {
    });
  }

}
