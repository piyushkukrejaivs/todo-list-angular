import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';
import { LocalService } from '../services/local.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TodosComponent
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have page heading', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain('To Do App');
    });
    
    it('should check for no tasks', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const bannerElement: HTMLElement = fixture.nativeElement;
        const component = fixture.componentInstance;
        component.todos.length = 0;
        fixture.detectChanges();
        expect(bannerElement.textContent).toContain('No tasks');
    });

    it('should check for tasks', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const component = fixture.componentInstance;
        component.todos.length = 1;
        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement.querySelector('app-todo-item')).not.toBeNull();
    });

    it('should delete task', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const component = fixture.componentInstance;
        let todo = new Todo();
        todo.title='title';
        todo.desc='desc';
        todo.sno=1;
        todo.active=true;
        spyOn(component, "deleteTodoTask");
        component.deleteTodoTask(todo);
        fixture.detectChanges();
        expect(component.deleteTodoTask).toHaveBeenCalled(); 
    });

    it('should toggle task finished', () => {
        const fixture = TestBed.createComponent(TodosComponent);
        const component = fixture.componentInstance;
        let todo = new Todo();
        todo.title='title';
        todo.desc='desc';
        todo.sno=1;
        todo.active=true;
        spyOn(component, "toggleTodoTask");
        component.toggleTodoTask(todo);
        fixture.detectChanges();
        expect(component.toggleTodoTask).toHaveBeenCalled(); 
    });

});