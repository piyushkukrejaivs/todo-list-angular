import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) {}

  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  

  title!: string;
  desc!: string;

  addTaskForm = this.fb.group({
    taskTitle: ['', Validators.required],
    taskDesc: ['', Validators.required]
  });

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  addTask() {
    if(this.addTaskForm.valid) {
      console.log(this.addTaskForm.value);
      let todo = new Todo;
      todo.sno = 8;
      todo.title = this.addTaskForm.value.taskTitle;
      todo.desc = this.addTaskForm.value.taskDesc;
      todo.active = true;
      this.todoAdd.emit(todo);
      console.log("form-emitted");
      this.router.navigate(['']);
    }
  }

}
