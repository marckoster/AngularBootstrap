import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './idea.component.html',
  styleUrls: ['./product.component.sass']
})
export class IdeaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
