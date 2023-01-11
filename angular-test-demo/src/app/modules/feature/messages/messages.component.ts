import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMessagesComponent } from '../add-messages/add-messages.component';

export interface DialogData {
  name: string;
  message: string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(public dialog: MatDialog) {}
  openDialogMessage() {
    this.dialog.open(AddMessagesComponent, {
      width: '350px',
    });
  }
}
