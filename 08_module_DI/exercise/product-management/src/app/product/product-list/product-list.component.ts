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

  // onDelete(id: number, name: string) {
  //   if (confirm('Bạn có muốn xóa: ' + name + ' ???')) {
  //     this.productService.deleteProduct(id, name).subscribe(value => {
  //       this.ngOnInit();
  //     }, error => {
  //     }, () => {
  //       this.router.navigateByUrl('/product/list');
  //     });
  //   }
  // }


  getInfoProductDelete(name: string, id: number) {
    this.productNameDelete = name;
    this.productIdDelete = id;
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa khách hàng  [' + this.productNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore(): void {
    this.productService.getAll().subscribe(value => {
      this.product = value.filter(item => item.name.toLowerCase().includes(this.productNameSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm khách hàng có tên là: "' + this.productNameSearch + '" (có ' + this.product.length + ' kết quả).');
    });
  }
}
