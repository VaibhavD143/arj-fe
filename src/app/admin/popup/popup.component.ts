import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Make } from 'src/app/models/Make';
import { Origin } from 'src/app/models/Origin';
import { Service } from 'src/app/models/Service';
import { UOM } from 'src/app/models/UOM';
import {Position} from '../../models/Position';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  position: Position= new Position(null,null,null,null,true,false,false);
  make : Make = new Make(null,null,true);
  origin : Origin = new Origin(null,null,true);
  uom : UOM = new UOM(null,null,true);
  service : Service = new Service(null,null,null,true);

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) {
    console.log(data['elementName']);
    if(data['update']==true){

      if(data['elementName']=='position'){
        this.position=new Position( data['element'].id, data['element'].name, data['element'].code, data['element'].hierarchy, data['element'].isValid, data['element'].canCreate, data['element'].canEnd);
      }
      else if(data['elementName']=="make"){
        this.make = new Make(data['element'].id,data['element'].value,data['element'].isValid);
      }
      else if(data['elementName']=="origin"){
        this.origin = new Origin(data['element'].id,data['element'].value,data['element'].isValid);
      }
      else if(data['elementName']=="uom"){
        this.uom = new UOM(data['element'].id,data['element'].unit,data['element'].isValid);
      }
      else if(data['elementName']=="service"){
        this.service = new Service(data['element'].id,data['element'].name,data['element'].code,data['element'].isValid);
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
