import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
emplist: any = {};

formData = {
  nom: ''
};

constructor(
  // private toastr: ToastrService,
  private route: ActivatedRoute,private service: MasterService,private http: HttpClient,private router: Router){}

  ngOnInit(){
    const id: string | null = this.route.snapshot.params['id'];
    // console.log('id: '+id);
     this.service.empById(id).subscribe(result => {  this.emplist = result; console.log(this.emplist);});
     
  }

  modifier(){
    const ids: string | null = this.route.snapshot.params['id'];
    this.service.modifEmp(ids,this.formData).subscribe(result => 
      {  this.emplist = result; console.log(this.emplist);this.router.navigate(['/update', ids]);});
    // this.toastr.success('Formulaire soumis avec succès!');
    this.router.navigate(['/update', ids]);
  }


}
