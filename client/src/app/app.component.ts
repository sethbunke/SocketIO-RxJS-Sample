import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: string;
  current: string;
  updateObservable: Observable<string>;

  constructor(private chatService: ChatService) {
    this.updateObservable = this.chatService.getUpdateObservable();
    this.updateObservable.subscribe(input => {
      console.log('subscribe: ' + input);
      this.current = input;
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
