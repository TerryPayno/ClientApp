import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../../Services/HomeService/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mylist:{
    Title: string,
    SubTitle: string,
    Details: string,
    SubDetails: string,
    Img: string
  }[] = [];
  constructor(private homeData: HomeDataService) { }

  ngOnInit() {
    this.homeData.getAllData().subscribe(data => {
      for (let i = 0; i < 3; i++){
        this.mylist[i] = data[i];
        console.log(this.mylist);
    }
    })
  }

}
