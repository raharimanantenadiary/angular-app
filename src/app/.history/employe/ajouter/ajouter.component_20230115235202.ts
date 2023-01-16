import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  formData = {
    nom: '',
    description: ''
  };

  constructor( private toastr: ToastrService,private service: MasterService,private http: HttpClient,private router: Router){}

   onSubmit() {
    this.service.saveData(this.formData).subscribe(response => {
      // this.service.getDataEmp().subscribe(result => {  this.emplist = result; });
        this.router.navigate(['/liste']);
      });
  }

    ngOnInit(){
    }

  showSuccess() {
    this.toastr.success('Effectuée avec success!','Ajout!');
  }

}
