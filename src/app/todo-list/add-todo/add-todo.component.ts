import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;

  addTaskForm = this.fb.group({
    taskTitle: [''],
    taskDesc: ['']
  });

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.addTaskForm.value);
    let todo = new Todo;
    todo.sno = 8;
    todo.title = this.addTaskForm.value.taskTitle;
    todo.desc = this.addTaskForm.value.taskDesc;
    todo.active = true;
    this.todoAdd.emit(todo);
  }

}
