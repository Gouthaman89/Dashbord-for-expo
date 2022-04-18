import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';
 import  * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  readonly uri : string="ws://34.230.43.8:1880/ws/simple";
  constructor() {}
  
 connect(): Rx.Subject<MessageEvent>{
  this.socket =io(this.uri);

 let observable= new Observable(observer => {
 this.socket.on('message',(data:any)=>{
    console.log("recived a message from websocket serve");
    observaer.next(data);
 })
 return () => {
   this.socket.disconnect();
 }
 })
 let observaer = {
   next:(data:Object)=>{
     this.socket.emit('message',JSON.stringify(data));
   },
  };

  
  return Rx.Subject.create(observaer,observable);
}
}