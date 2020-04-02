import { Component, OnInit } from '@angular/core';
import { CarpetService } from '../services/carpetService/carpet.service';
import { Carpet } from '../models/carpet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carpet',
  templateUrl: './create-carpet.component.html',
  styleUrls: ['./create-carpet.component.css']
})
export class CreateCarpetComponent implements OnInit {
  carpet: Carpet = new Carpet();
  submitted = false;

  constructor(private carpetService: CarpetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.carpet = new Carpet();
  }

  save() {
    this.carpetService.createCarpet(this.carpet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.carpet = new Carpet();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}



