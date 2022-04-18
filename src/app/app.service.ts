import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface todo {
  type:string,
  EMPID:string,
  c_time:string
  EMPNM:string, 
  d_time:string,
  state:string, 
  e_time:string,
  collr:string
}

export interface actimedata {
  name:string,
  ac_time:string
}

export interface productSales {
  name:string,
  value:string
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl ='http://34.230.43.8:1880/getAvailableMemberList_d';
  apiUrl1 ='http://34.230.43.8:1880/getActime';
  apiUrl2 ='http://34.230.43.8:1880/getpiedata';
  apiUrl3 ='http://34.230.43.8:1880/getpietabledata';
  apiUrl1_2 ='http://34.230.43.8:1880/getActime_2';
  apiUrl2_2 ='http://34.230.43.8:1880/getpiedata_2';
  apiUrl3_2 ='http://34.230.43.8:1880/getpietabledata_2';
  constructor(public httpclient: HttpClient) { }
  getDeals(): Observable<todo[]>{
    return this.httpclient.get<todo[]>(this.apiUrl);
  }
  getAcdata_1(): Observable<actimedata[]>{
    return this.httpclient.get<actimedata[]>(this.apiUrl1);
  }
  getpiedata_1(): Observable<productSales[]>{
    return this.httpclient.get<productSales[]>(this.apiUrl2);
  }
  getpietabledata_1(): Observable<productSales[]>{
    return this.httpclient.get<productSales[]>(this.apiUrl3);
  }
  getAcdata_2(): Observable<actimedata[]>{
    return this.httpclient.get<actimedata[]>(this.apiUrl1_2);
  }
  getpiedata_2(): Observable<productSales[]>{
    return this.httpclient.get<productSales[]>(this.apiUrl2_2);
  }
  getpietabledata_2(): Observable<productSales[]>{
    return this.httpclient.get<productSales[]>(this.apiUrl3_2);
  }
}
