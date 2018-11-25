import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../Services/CarService/car-service.service';

import { concat } from 'rxjs';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.scss']
})
export class DetailedViewComponent implements OnInit {
  Car:object = {
    Title: null,
    SubTitle: null,
    Details: null,
    SubDetails: null,
    Img: null    
  }
  min = -1;
  max = 4;
  picNum = 0;
  subimg = ["../../assets/i0.jpg", "../../assets/i1.jpg", "../../assets/i2.jpg", "../../assets/i3.jpg", "../../assets/i4.jpg", "../../assets/i5.jpg", "../../assets/i6.jpg", "../../assets/i7.jpg", "../../assets/i8.jpg"];
  fullSubImg = ["../../assets/i0.jpg", "../../assets/i1.jpg", "../../assets/i2.jpg", "../../assets/i3.jpg", "../../assets/i4.jpg", "../../assets/i5.jpg", "../../assets/i6.jpg", "../../assets/i7.jpg", "../../assets/i8.jpg"];

  test(index) {
    //this.Car.Img = this.subimg[index];
  }
  NextImg() {
    
    if (!(this.picNum + 4 > (this.fullSubImg.length -1))) {

      this.subimg[0] = this.fullSubImg[this.picNum + 1];
      this.subimg[1] = this.fullSubImg[this.picNum + 2];
      this.subimg[2] = this.fullSubImg[this.picNum + 3];
      this.subimg[3] = this.fullSubImg[this.picNum + 4];
      this.picNum++;
      //this.Car.Img = this.fullSubImg[this.picNum];;
    } else if (!(this.picNum + 1 > (this.fullSubImg.length - 1))) {
      this.picNum++;
      //this.Car.Img = this.fullSubImg[this.picNum];;
    }

  }
  PrevImg() {
    
    if (!(this.picNum - 3 < 0)) {
      this.subimg[0] = this.fullSubImg[this.picNum - 3];
      this.subimg[1] = this.fullSubImg[this.picNum - 2];
      this.subimg[2] = this.fullSubImg[this.picNum - 1];
      this.subimg[3] = this.fullSubImg[this.picNum];
      this.picNum--;
      //this.Car.Img = this.fullSubImg[this.picNum];
    } else if (!(this.picNum - 1 < 0 )){
      this.picNum--;
      //this.Car.Img = this.fullSubImg[this.picNum];;
    }

  }
  constructor(private CarService: CarServiceService) { }

  ngOnInit() {
    this.CarService.getCarData().subscribe(data => {
      this.Car = data
    })
  }

}
