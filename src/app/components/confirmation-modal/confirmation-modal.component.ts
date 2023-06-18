import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Constants } from '../../util/constants';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  title: string = Constants.CONFIRM_TITLE;
  message: string = Constants.CONFIRM_MESSAGE;

  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>) { }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
