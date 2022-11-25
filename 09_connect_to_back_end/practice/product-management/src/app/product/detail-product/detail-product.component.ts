import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../model/IProduct';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {


  product: IProduct;

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
