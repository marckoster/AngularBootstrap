import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  hilfe = false;
   miteinreicher: string;

  constructor() {
  }

  ngOnInit() {
  }

  showHilfe() {
    this.hilfe = (this.hilfe === true) ? false : true;
  }

  changeSelection(event:any){
    this.miteinreicher = event.target.value.toString();
  }
}
