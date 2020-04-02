import { Component, OnInit } from '@angular/core';
import { Carpet } from '../models/carpet';
import { CarpetService } from '../services/carpetService/carpet.service';
import { CarpetListComponent } from '../carpet-list/carpet-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskService } from '../services/taskService/task.service';


@Component({
  selector: 'app-carpet-details',
  templateUrl: './carpet-details.component.html',
  styleUrls: ['./carpet-details.component.css']
})
export class CarpetDetailsComponent implements OnInit {
  id: number;
  tasks: Observable<Task[]>;
  tarea_pendiente : Task;
  carpet: Carpet;

  constructor(private route: ActivatedRoute,private router: Router, private taskService: TaskService, private carpetService: CarpetService) { }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id']; 
    this.carpetService.getCarpet(this.id)
      .subscribe(data => {
        console.log(data)
        this.carpet = data;
      }, error => console.log(error));   
    
    
      this.taskService.getTaskByIdCarpet(this.id)
      .subscribe(data => {
        console.log(data)
        this.tasks = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tasks']);
  }

  onChange(id: number, isChecked: boolean) {
    this.tarea_pendiente= new Task();
    //voy a buscar esa tarea para editar el pendiente
    this.taskService.getTask(id)
      .subscribe(data => {
        this.tarea_pendiente = data;
        console.log("Fue a buscar la tarea",this.tarea_pendiente);


        console.log("valor checked", isChecked);
    if (isChecked) {
      console.log("entro por true");
      this.tarea_pendiente.pendiente=0;//false
      
    } else {
      console.log("entro por false");
      this.tarea_pendiente.pendiente=1;//true
    }
   
console.log("valor de tarea endiente despues", this.tarea_pendiente);
     this.taskService.updateTask(id, this.tarea_pendiente)
      .subscribe(data => {
        console.log("Actualiza tarea",data)
      }, error => console.log(error)); 


      }, error => console.log(error));
     
      
  }

}
  
  

  
  



