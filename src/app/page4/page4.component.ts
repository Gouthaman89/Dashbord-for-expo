import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component {
  name = 'Set iframe source';
  url: string = "https://angular.io/api/router/RouterLink";
 

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() { 
 
  }
}