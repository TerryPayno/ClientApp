import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) { }
  getCarData() {
    return this.http.get('https://localhost:44367/api/SampleDataController/GetCarData')
  }
}
