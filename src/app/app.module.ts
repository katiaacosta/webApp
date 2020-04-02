import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateCarpetComponent } from './create-carpet/create-carpet.component';
import { CarpetDetailsComponent } from './carpet-details/carpet-details.component';
import { CarpetListComponent } from './carpet-list/carpet-list.component';
import { UpdateCarpetComponent } from './update-carpet/update-carpet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    TaskListComponent,
    UpdateTaskComponent,
    CreateCarpetComponent,
    CarpetDetailsComponent,
    CarpetListComponent,
    UpdateCarpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
