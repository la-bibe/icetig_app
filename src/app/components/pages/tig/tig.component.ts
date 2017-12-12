import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tig',
  templateUrl: './tig.component.html',
  styleUrls: ['./tig.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TigComponent implements OnInit {

  fakeArray = '';
    /* En attendant l'api */
  statusList = ['Assigned', 'In progress', 'Done', 'Not done'];
  tig = {
      assigned : {firstName : 'John', lastName : 'Doe', mail : 'john.doe@epitech.eu', avatar : '/assets/avatar.jpg'},
      grantDate : '16/07/1998',
      reason : 'Bacon ipsum dolor amet doner picanha tri-tip biltong leberkas salami meatball tongue filet' +
      'mignon landjaeger tail. Kielbasa salami tenderloin picanha spare ribs, beef ribs strip steak jerky cow.' +
      'Pork chop chicken ham hock beef ribs turkey jerky.',
      allocator : {firstName : 'Fantin', lastName : 'Bibas', mail : 'fantin.bibas@epitech.eu', avatar : '/assets/fantin.jpg'},
      status : this.statusList[Math.floor(Math.random() * this.statusList.length)],
      work : ' Shoulder beef capicola doner, tongue tail sausage short ribs andouille.' +
      'Rump frankfurter landjaeger t-bone, kielbasa doner ham hock shankle venison.',
      endDate : {start : '16/07/1998', end : '16/07/1998'}
    };
  statusColors = {};

  constructor(private http: Http) {
    this.statusColors['Assigned'] = '#00ADB5';
    this.statusColors['In progress'] = '#FFDD00';
    this.statusColors['Not done'] = '#B50000';
    this.statusColors['Done'] = '#14C400';
    this.getJSON().subscribe(data => this.fakeArray = data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    console.log('loading');
    return this.http.get('/assets/tig.json')
      .map((res: any) => res.json())
      .catch((error : any) => console.log(error));
  }

  ngOnInit() {
  }

}
