import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularJsonViewerRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularJsonViewerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
