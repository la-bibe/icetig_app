import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../../services/api.service';
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
  tigArray;

  constructor(private apiService: ApiService, private http: Http) {
    this.statusColors['Assigned'] = '#00ADB5';
    this.statusColors['In progress'] = '#FFDD00';
    this.statusColors['Not done'] = '#B50000';
    this.statusColors['Done'] = '#14C400';
    this.getJSON().subscribe(data => this.tigArray = data, error => console.log(error));
      console.log(this.tigArray);
  }

  public getJSON() {
    console.log('loading');
    return this.apiService.apiGet('/user/4/sanctions');
  }

  ngOnInit() {
  }
    toggleCollapse() {
        $('.collapse.show').collapse('hide');
    }
}
