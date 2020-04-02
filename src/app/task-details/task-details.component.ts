import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';
import { TaskService } from '../services/taskService/task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  id: number;
  task: Task;

  constructor(private route: ActivatedRoute,private router: Router, private taskService: TaskService) { }
  
  ngOnInit() {
    this.task = new Task();

    this.id = this.route.snapshot.params['id'];
    
    this.taskService.getTask(this.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tasks']);
  }
}
  
  

  
  


