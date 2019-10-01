import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BootstrapComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cms'`, () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cms');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BootstrapComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cms!');
  });
});
