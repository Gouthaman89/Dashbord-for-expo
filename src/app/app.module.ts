import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Page2Component } from './page2/page2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './home/home.component';
import { Page5Component } from './page5/page5.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    HomeComponent,
    Page5Component   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatSlideToggleModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
