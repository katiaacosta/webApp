import { Component, OnInit } from '@angular/core';


import { CarpetDetailsComponent } from '../carpet-details/carpet-details.component';
import { Observable } from "rxjs";
import { CarpetService } from "../services/carpetService/carpet.service";
import { Carpet } from "../models/carpet";
import { Router } from '@angular/router';

@Component({
  selector: 'app-carpet-list',
  templateUrl: './carpet-list.component.html',
  styleUrls: ['./carpet-list.component.css']
})
export class CarpetListComponent implements OnInit {
  carpets: Observable<Carpet[]>;

  constructor(private carpetService: CarpetService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.carpets = this.carpetService.getCarpetList();
  }

  deleteCarpet(id: number) {
    this.carpetService.deleteCarpet(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  /*carpetDetails(id: number){
    this.router.navigate(['detailsCarpet', id]);
  }
*/
}



