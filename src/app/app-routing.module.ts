import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonViewerComponent } from './json-viewer';

const routes: Routes = [
  { path: '', redirectTo: 'jsonViewer', pathMatch: 'full'},
  { path: 'jsonViewer', component: JsonViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AngularJsonViewerRoutingModule { }
