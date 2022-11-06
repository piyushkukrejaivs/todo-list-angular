import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTodoComponent } from './todo-list/about-todo/about-todo.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { TodosComponent } from './todo-list/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutTodoComponent },
  { path: 'addTask', component: AddTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
