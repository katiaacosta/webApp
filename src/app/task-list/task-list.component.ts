import { Component, OnInit } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Observable } from "rxjs";
import { TaskService } from "../services/taskService/task.service";
import { Task } from "../models/task";
import { Router } from '@angular/router';
import { CarpetService } from "../services/carpetService/carpet.service";
import { Carpet } from "../models/carpet";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  carpets:Observable<Carpet[]>;
  tarea_pendiente : Task;

  constructor(private taskService: TaskService, private carpetService: CarpetService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.tasks = this.taskService.getTaskList();
    this.carpets = this.carpetService.getCarpetList();
    console.log("tasks", this.tasks);
    console.log("carpets", this.carpets);
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  taskDetails(id: number){
    this.router.navigate(['detailsTask', id]);
  }

  updateTask(id: number){
    this.router.navigate(['updateTask', id]);
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

  carpetDetails(id: number){
    this.router.navigate(['detailsCarpet', id]);
  }

  updateCarpet(id:number){
    this.router.navigate(['updateCarpet', id])
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



