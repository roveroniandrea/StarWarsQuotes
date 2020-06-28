import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-submit',
  templateUrl: './dialog-submit.component.html',
  styleUrls: ['./dialog-submit.component.css']
})
export class DialogSubmitComponent implements OnInit {

  constructor(public matDialog: MatDialogRef<DialogSubmitComponent>) { }

  ngOnInit(): void {
  }

  accept() {
    this.matDialog.close({ accept: true });
  }

  refuse() {
    this.matDialog.close({ accept: false });
  }
}
