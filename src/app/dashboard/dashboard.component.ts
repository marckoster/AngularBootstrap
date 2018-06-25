import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/internal/Observable";
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  ideaRef: AngularFireObject<any>;
  ideas: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.ideas = db.list('ideas').valueChanges();
  }
  save(newName: string) {
    this.ideaRef.set({ name: newName });
  }
  update(newSize: string) {
    this.ideaRef.update({ size: newSize });
  }
  delete() {
    this.ideaRef.remove();
  }
  ngOnInit() {
  }


}
