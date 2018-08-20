import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  adminBereich: boolean = false;

  constructor() {

  }


  bereichWechseln(){
   this.adminBereich = ( this.adminBereich === false ) ? true : false;
    console.log(this.adminBereich);
  }

  ngOnInit() {
  }
}
