import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;


  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
