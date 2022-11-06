import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/Todo';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos!: Todo[];

  constructor(private localService: LocalService) { 
    this.todos = localService.getTodoTasks();  
  }

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

  addTodoTask(todo: Todo) {
    this.localService.saveTodoTasks(this.todos, todo);
  }

}
