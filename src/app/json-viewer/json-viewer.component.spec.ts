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
      declarations: []
    });
  });

  it('should create an instance', () => {
    let component = new JsonViewerComponent();
    expect(component).toBeTruthy();
  });
});
