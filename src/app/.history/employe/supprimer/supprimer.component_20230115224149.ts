import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,private service: MasterService,private http: HttpClient,private router: Router){}



    supprimer(){
       const id: string | null = this.route.snapshot.params['id'];
       console.log(id);
       
      //  this.service.deleteEmp(id).subscribe(result => {  this.router.navigate(['/liste']);});
    }

    ngOnInit(): void {
      const id: string | null = this.route.snapshot.params['id'];
      console.log(id);
      this.router.navigate(['/liste']);
    }

}
