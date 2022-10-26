import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.productService.findById(id).subscribe(value => {
      this.product = value;
    });
  }
}
