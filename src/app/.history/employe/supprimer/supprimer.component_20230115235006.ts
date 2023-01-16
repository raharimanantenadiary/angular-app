import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,private service: MasterService,private http: HttpClient,private router: Router){}



    ngOnInit(): void {
    }
    
    del(){
      const id: string | null = this.route.snapshot.params['id'];
      this.service.deleteEmp(id).subscribe(result => {console.log('Work!!!');});      
      this.router.navigate(['/liste']);
      this.showSuccess(); 
    }

    showSuccess() {
      this.toastr.success('Effectuée avec success!','Suppresion!');
    }

}
