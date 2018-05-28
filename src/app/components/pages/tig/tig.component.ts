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
  stateList = ['Assigned', 'In progress', 'Done', 'Not done'];
  statusColors = {};
  tigs;

  constructor(private apiService: ApiService, private http: Http) {
    this.statusColors[0] = '#00ADB5';
    this.statusColors[1] = '#FFDD00';
    this.statusColors[2] = '#B50000';
    this.statusColors[3] = '#14C400';
    this.apiService.getSanctions(4).then(data => this.tigs = data["data"], error => console.log(error));
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
