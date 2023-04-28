// eslint-disable-next-line import/no-unresolved
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let rootButtonEl: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    rootButtonEl = fixture.nativeElement.querySelector('.commons-root-button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the text if provided', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    component.text = 'Click me!';
    fixture.detectChanges();
    const buttonText = fixture.nativeElement.querySelector('.commons-button-text').textContent;
    expect(buttonText.trim()).toEqual('Click me!');
  });

  it('should not render the text if not provided', () => {
    fixture.detectChanges();
    const textEl = rootButtonEl.querySelector('.commons-button-text');
    expect(textEl).toBeFalsy();
  });

  it('should set the background color', () => {
    component.backgroundColor = 'blue';
    fixture.detectChanges();
    expect(rootButtonEl.style.backgroundColor).toBe('blue');
  });

  it('should set the text color', () => {
    component.color = 'red';
    fixture.detectChanges();
    expect(rootButtonEl.style.color).toBe('red');
  });

  it('should have default class list', () => {
    fixture.detectChanges();
    expect(rootButtonEl.classList).toContain('commons-root-button');
    expect(rootButtonEl.classList).toContain('commons-root-button--raised');
    expect(rootButtonEl.classList).toContain('commons-root-button--size-medium');
  });

  it('should set class list based on input values', () => {
    component.type = 'flat';
    component.setClassList();
    fixture.detectChanges();
    expect(rootButtonEl.classList).toContain('commons-root-button--flat');
    expect(rootButtonEl.classList).toContain('commons-root-button--size-big');
  });

  it('should change class list when type input changes', () => {
    component.setType('raised');
    component.setClassList();
    fixture.detectChanges();
    expect(rootButtonEl.classList).toContain('commons-root-button--raised');
    component.setType('flat');
    component.setClassList();
    fixture.detectChanges();
    expect(rootButtonEl.classList).toContain('commons-root-button--flat');
  });

  it('should expose the root button element through a ViewChild', () => {
    expect(component.rootButton.nativeElement).toBe(rootButtonEl);
  });
});
