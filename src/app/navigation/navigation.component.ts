import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  myInterval: any;
  s: any;
  currentDate = new Date();
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router
  ) {
    this.s = new Observable((observer) => {});
  }

  ngOnInit() {
    this.route.navigate(['/home']);
  }
}
