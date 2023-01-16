import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
emplist: any;

  

  constructor(private service: MasterService,private http: HttpClient,private router: Router){}

  ngOnInit(){
     this.service.getDataEmp().subscribe(result => {  this.emplist = result; });
  }

  

  

  // getUserFormData(data:any){
  //    this.service.saveData(data).subscribe(result => {} );
  // }


}
