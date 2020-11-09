import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Position} from '../../models/Position';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  position: Position= new Position(null,null,null,null,true,false,false);

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) {
    if(data['element']=='position' && data['update']==true){
      this.position=new Position( data['position'].id, data['position'].name, data['position'].code, data['position'].hierarchy, data['position'].isValid, data['position'].canCreate, data['position'].canEnd);
      console.log('position');
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
