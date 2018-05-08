import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  private updateSubject = new BehaviorSubject<string>('');
  private updateObservable = this.updateSubject.asObservable();

  constructor() {
      this.socket = io(this.url);

      const subject = this.updateSubject;

      this.socket.on('update', function (data) {
        console.log(data);
        subject.next(data);
        // this.updateObservable.sendMessage(data);
        // this.socket.on('update')
        // socket.emit('my other event', { my: 'data' });
      });
  }

  public getUpdateObservable() {
    return this.updateObservable;
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }
}
