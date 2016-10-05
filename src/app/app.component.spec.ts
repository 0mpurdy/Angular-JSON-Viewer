/* tslint:disable:no-unused-variable */

import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { AngularJsonViewerRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsonViewerComponent } from './json-viewer';

describe('App: AngularJsonViewer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularJsonViewerRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        JsonViewerComponent
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'JSON Viewer'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JSON Viewer');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('JSON Viewer');
  }));
});
