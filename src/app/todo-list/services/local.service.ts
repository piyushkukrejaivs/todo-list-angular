import { Injectable } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  localItem!: string | null;

  constructor() { 
    
  }

  getTodoTasks(): Todo[] {
    var todos: Todo[];
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {
      todos = [];
    } else {
      todos = JSON.parse(this.localItem);
    }
    return todos;
  }

  saveTodoTasks(todos: Todo[], todo: Todo) {
    console.log(todo);
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  deleteFromTodoTasks(todos: Todo[], todo: Todo) {
    console.log(todo);
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  toggleTodoTask(todos: Todo[], todo: Todo) {
    console.log(todo);
    const index = todos.indexOf(todo);
    todos[index].active = !todos[index].active;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

}
