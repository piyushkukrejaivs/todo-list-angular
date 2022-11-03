import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTodoComponent } from './todo-list/about-todo/about-todo.component';
import { TodosComponent } from './todo-list/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
