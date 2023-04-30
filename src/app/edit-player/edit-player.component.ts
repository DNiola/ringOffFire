import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {

  allProfilePictures = [
    'gamer.png',
    'gamer2.png',
    'gamer3.png',
    'gamer4.png',
    'gamer5.png'
  ]


  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }
}
