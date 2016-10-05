/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { JsonViewerComponent } from './json-viewer.component';

describe('Component: JsonViewer', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        JsonViewerComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new JsonViewerComponent();
    expect(component).toBeTruthy();
  });

  it('should create the component', async(() => {
    let fixture = TestBed.createComponent(JsonViewerComponent);
    let jsonViewerComponent = fixture.debugElement.componentInstance;
    expect(jsonViewerComponent).toBeTruthy();
  }));

  it('should have error hidden by default', async(() => {
    let fixture = TestBed.createComponent(JsonViewerComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#jsonParseError')).toBeFalsy;
  }));

  it('should show error when error text is added', async(() => {
    let fixture = TestBed.createComponent(JsonViewerComponent);
    let component = fixture.componentInstance;
    component.jsonParseError = 'test error';
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#jsonParseError')).toBeTruthy;
    expect(compiled.querySelector('#jsonParseError').textContent).toEqual('test error');
  }));

  it('should default to adding quotes', async(() => {
    let component = new JsonViewerComponent();
    expect(component.addQuotes).toBe(true);
  }));

  it('should default to adding quotes', async(() => {
    let component = new JsonViewerComponent();
    expect(component.addQuotes).toBe(true);
  }));
  
});
