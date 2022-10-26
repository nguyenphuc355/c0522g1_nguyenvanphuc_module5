import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  product: Product[] = [];
  productNameDelete: string;
  private productIdDelete: number;
  private mess: string;

  productNameSearch: '';

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(value => {
      this.product = value;
    }, error => {
    }, () => {
    });
  }
  getInfoProductDelete(name: string, id: number) {
    this.productNameDelete = name;
    this.productIdDelete = id;
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa sản phẩm  [' + this.productNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
    });
  }

  searchByMore(): void {
    this.productService.getAll().subscribe(value => {
      this.product = value.filter(item => item.name.toLowerCase().includes(this.productNameSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
    });
  }
}
