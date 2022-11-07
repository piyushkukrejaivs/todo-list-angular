import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    let todo = new Todo();
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have finished label for checkbox', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Finished');
  });

  it('should have delete button', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Delete');
  });

  it('should display tasks', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    console.log(fixture.nativeElement);
    expect(fixture.debugElement.query(By.css('.table'))).not.toBeNull();
  });

});
