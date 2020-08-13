import { Component, OnInit } from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messagesService.messages.length">

      <h2>Messages</h2>
      <button class="clear" (click)="messagesService.clear()">
        <mat-icon aria-hidden="false" aria-label="Example home icon">clear</mat-icon>
      </button>
      <mat-list>
        <mat-list-item *ngFor="let message of messagesService.messages">  {{message}}  </mat-list-item>
      </mat-list>
    </div>

  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(private messagesService: MessagesService) {

  }

  ngOnInit() {
  }

}
