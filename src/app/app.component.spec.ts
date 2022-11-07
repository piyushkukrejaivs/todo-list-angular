import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AppRoutingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain navbar elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Todo List');
    expect(bannerElement.textContent).toContain('Home');
    expect(bannerElement.textContent).toContain('About');
    expect(bannerElement.textContent).toContain('Add Task');
});

});