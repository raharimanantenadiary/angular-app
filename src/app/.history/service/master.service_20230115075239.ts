import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // apiurl = "localhost:4900/test/getAll";
  apiurl = "http://localhost:4900/test/getAll";
  apiAdd = "http://localhost:4900/test";
  
  userinfo = [{"nom": "Tsanta","marque": "Toyota"},
              {"nom": "Manata","marque": "Chevrolet"},
              {"nom": "Ganta", "marque": "Renault"}];

  getCarData(){
    return this.userinfo;
  }

  getDataEmp(){
    return this.http.get(this.apiurl);
  }

  saveData(inputData:any){
      return this.http.post(this.apiAdd,inputData);
  }

  empById(id:any){
      return this.http.get(this.apiAdd+"/"+id);
  }


  //   deleteempById(id:any){
  //     return this.http.delete(this.apiAdd+"/"+id);
  // }

}
