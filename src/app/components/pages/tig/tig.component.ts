import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
declare var jquery: any;
declare var $: any;

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
    toggleCollapse() {
        $('.collapse.show').collapse('hide');
    }
}
