import {KhachHang} from './khachHang';
import {KyHan} from './kyHan';

export interface SoTietKiem {
  id?: number;
  khachHang?: KhachHang;
  ngayMoSo?: string;
  thoiGianBatDauGui?: string;
  kyHan?: KyHan;
  soTienGui?: string;
  laiSuat?: string;
  uuDai?: string;
}
