import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  
  constructor(private localService: LocalService) { 
    this.todos = localService.getTodoTasks();  
  }

  ngOnInit(): void {
  }

  addTodoTask(todo: Todo) {
    this.localService.saveTodoTasks(this.todos, todo);
  }

  deleteTodoTask(todo: Todo) {
    this.localService.deleteFromTodoTasks(this.todos, todo);
  }

  toggleTodoTask(todo: Todo) {
    this.localService.toggleTodoTask(this.todos, todo);
  }

}
