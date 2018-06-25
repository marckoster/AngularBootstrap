import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {


  id: any;
  idea:any;

  constructor(private router: Router, private route: ActivatedRoute, private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idea = this.db.object('/ideas/' +params['id']);
      console.log(this.idea);
    });
  }

}
