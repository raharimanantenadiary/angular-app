import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
emplist: any = {};

constructor(private route: ActivatedRoute,private service: MasterService,private http: HttpClient,private router: Router){}

  ngOnInit(){
    const id: string | null = this.route.snapshot.params['id'];
    // console.log('id: '+id);
     this.service.empById(id).subscribe(result => {  this.emplist = result; console.log(this.emplist);});
  }

  modifier(){
    const id: string | null = this.route.snapshot.params['id'];
    this.service.updateEmp(id).subscribe(result => {  
      this.service.empById(id).subscribe(result => {  this.emplist = result; console.log(this.emplist);});
    });
  }


}
