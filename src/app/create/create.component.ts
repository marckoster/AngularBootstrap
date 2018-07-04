import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  hilfe = false;

  constructor() { }

  ngOnInit() {
  }

  showHilfe(){
    this.hilfe = (this.hilfe === true) ? false : true;
  }

}
