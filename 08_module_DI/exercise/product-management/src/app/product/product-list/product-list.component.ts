import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Xóa thành công!',
        text: 'Sản phẩm :' + this.productNameDelete,
        imageUrl: 'https://genk.mediacdn.vn/2018/9/20/a2989534790f069f03671d247dd5222b-15374152422351400600667.gif',
        imageHeight: 250,
        imageWidth: 400
      });
      this.ngOnInit();
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
