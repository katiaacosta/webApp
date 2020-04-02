import { Component, OnInit } from '@angular/core';
import { Carpet } from '../models/carpet';
import { ActivatedRoute, Router } from '@angular/router';
import { CarpetService } from '../services/carpetService/carpet.service';

@Component({  
  selector: 'app-update-carpet',
  templateUrl: './update-carpet.component.html',
  styleUrls: ['./update-carpet.component.css']
})
export class UpdateCarpetComponent implements OnInit {
  id: number;
  carpet: Carpet;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private carpetService: CarpetService) { }
    ngOnInit() {
      this.carpet = new Carpet();  
      this.id = this.route.snapshot.params['id'];      
      this.carpetService.getCarpet(this.id)
        .subscribe(data => {
          console.log(data)
          this.carpet = data;
        }, error => console.log(error));
    }  
    updateCarpet() {
      this.carpetService.updateCarpet(this.id, this.carpet)
        .subscribe(data => console.log(data), error => console.log(error));
      this.carpet = new Carpet();
      this.gotoList();
    }  
    onSubmit() {
      this.submitted = true;
      this.updateCarpet();    
    }  
    gotoList() {
      this.router.navigate(['/tasks']);
    }
}
