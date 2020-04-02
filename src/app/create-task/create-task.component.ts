import { Component, OnInit } from '@angular/core';


import { TaskService } from '../services/taskService/task.service';
import { Task } from '../models/task';
import { Router } from '@angular/router';
import { Carpet } from '../models/carpet';
import { Observable } from 'rxjs';
import { CarpetService } from '../services/carpetService/carpet.service';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = new Task();
  submitted = false;
  carpets:Observable<Carpet[]>;



  constructor(private taskService: TaskService, private carpetService: CarpetService,
    private router: Router) { }

  ngOnInit(): void {
    this.carpets = this.carpetService.getCarpetList();
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.task.pendiente= 1;
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
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



