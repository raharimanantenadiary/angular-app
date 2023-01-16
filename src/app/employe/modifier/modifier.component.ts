import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  // id: number = 0;
  emplist: any;
  constructor(private route: ActivatedRoute,
    private router: Router,private service: MasterService){}
   
   ngOnInit(){
  // const id: string = this.route.snapshot.params['id']; 
  const id: string | null = this.route.snapshot.paramMap.get("id"); 

    this.service.empById(id).subscribe(result => {  this.emplist = result; });
  }

}
