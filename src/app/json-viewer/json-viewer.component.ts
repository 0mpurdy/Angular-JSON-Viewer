import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {

  private addQuotes: boolean;

  private jsonObject: string;
  private jsonParseError: string;

  constructor() { }

  ngOnInit() {
  }

  get jsonText() {
    return JSON.stringify(this.jsonObject, null, 4);
  }

  set jsonText(v){

    this.jsonParseError = '';

    if (this.addQuotes) {
      console.log('Adding quotes');

      try {
        this.jsonObject = JSON.parse(v);
        return;
      }
      catch (e) {
        
      }
    }

    try {
      this.jsonObject = JSON.parse(v);
    }
    catch (e) {
      this.jsonParseError = e.message;
    }
  }

}
