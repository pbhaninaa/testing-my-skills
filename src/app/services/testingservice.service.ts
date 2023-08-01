import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingserviceService {

  constructor(private http: HttpClient) { }
  //base url: string that will help me not to define it more than once
  BaseUrl = 'http://localhost:3000'
  //saving data from the form to the fake database
  saveData(value: any) {   
    return this.http.post(this.BaseUrl + '/database', value);
  }
  getData(){
    return this.http.get(this.BaseUrl + '/database');    
  }
  deleteAll(one:any){
    return this.http.delete(`http://localhost:3000/database${one}`);
  }
  
}