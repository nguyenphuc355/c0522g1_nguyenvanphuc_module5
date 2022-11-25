import {Component, OnInit} from '@angular/core';
import {SoTietKiem} from '../../model/soTietKiem';
import {SotietKiemService} from '../../service/sotiet-kiem.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  soTietKiems: SoTietKiem[];
  tenDelete: string;
  maSoDelete: number;

  tenSearch: '';
  private tenkhachHang: string;

  constructor(private sotietKiemService: SotietKiemService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sotietKiemService.getAll().subscribe(value => {
      this.soTietKiems = value;
      console.log(this.soTietKiems);
    }, error => {
    }, () => {
    });
  }

  getInfoDelete(maSoSo: number) {
    this.tenDelete = this.tenkhachHang;
    this.maSoDelete = maSoSo;
  }

  deleteCustomer(): void {
    this.sotietKiemService.deleteCustomer(this.maSoDelete).subscribe(() => {
      Swal.fire({
        title: 'Xóa thành công!',
        text: 'Sản phẩm :' + this.tenDelete,
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
    this.sotietKiemService.getAll().subscribe(value => {
      this.soTietKiems = value.filter(item => item.khachHang.tenKhachHang.toLowerCase().includes(this.tenSearch.toLowerCase()));
    }, error => {
      console.log(error);
    }, () => {
    });
  }

}
