import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { CarpetDetailsComponent } from './carpet-details/carpet-details.component';
import { CreateCarpetComponent } from './create-carpet/create-carpet.component';
import { CarpetListComponent } from './carpet-list/carpet-list.component';
import { UpdateCarpetComponent } from './update-carpet/update-carpet.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'addTask', component: CreateTaskComponent },
  { path: 'updateTask/:id', component: UpdateTaskComponent },
  { path: 'detailsTask/:id', component: TaskDetailsComponent },

  //{ path: '', redirectTo: 'carpet', pathMatch: 'full' },
  { path: 'carpets', component: CarpetListComponent },
  { path: 'addCarpet', component: CreateCarpetComponent },
  { path: 'updateCarpet/:id', component: UpdateCarpetComponent },
  { path: 'detailsCarpet/:id', component: CarpetDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
