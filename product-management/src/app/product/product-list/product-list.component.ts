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


  productNameDelete: string;
  private productIdDelete: number;
  private mess: string;

  productNameSearch: '';
  numberRecord = 5;
  curPage = 1;
  totalPage: number;
  productListPaging: Product[];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAllProductSearch(this.productNameSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.productService.findProductSearchPaging(this.numberRecord, this.curPage,
      this.productNameSearch).subscribe(pagingList => {
      this.productListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
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
    this.curPage = 1;
    this.ngOnInit();
  }


  // searchByMore(): void {
  //   this.productService.getAll().subscribe(value => {
  //     this.product = value.filter(item => item.name.toLowerCase().includes(this.productNameSearch.toLowerCase()));
  //   }, error => {
  //     console.log(error);
  //   }, () => {
  //     this.curPage = 1;
  //     this.ngOnInit();
  //   });
  // }

}
