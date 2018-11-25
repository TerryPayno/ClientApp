import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(private http: HttpClient) { }
  getAllData() {
    return this.http.get('https://localhost:44367/api/SampleDataController/GetAll')
  }
}
