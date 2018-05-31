import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../../../services/api.service';
import {SessionService} from '../../../services/session.service';
import {PermissionsService} from '../../../services/permissions.service';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'app-tig',
	templateUrl: './tig.component.html',
	styleUrls: ['./tig.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TigComponent implements OnInit {

	stateList = ['Assigned', 'In progress', 'Done', 'Not done'];
	statusColors = {};
	id = JSON.parse(localStorage.getItem('session'));
	tigs;

	constructor(private apiService: ApiService,
	            private sessionService: SessionService,
	            private permissionService: PermissionsService,
	            private http: Http) {

		this.statusColors[0] = '#00ADB5';
		this.statusColors[1] = '#FFDD00';
		this.statusColors[2] = '#B50000';
		this.statusColors[3] = '#14C400';

		// if (this.permissionService.hasPermission("read_group_user_sanctions", -1))
		// 	this.apiService.getSanctions()
		// 		.then(data => this.tigs = data["data"], error => console.log(error));
		// else
			this.apiService.getSanctions(this.sessionService.getID())
				.then(data => this.tigs = data['data'], error => console.log(error));
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

	getFormatedDate(d : IDate) : string {
		const date =  new Date(d.date);

		return `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`
	}
}

interface IDate {
	date: string;
	timezone: string;
	timezone_type: string;
}

// interface ITig {
// 	date: IDate;
// 	endDate: IDate;
// 	id: number;
// 	issuer: number;
// 	reason: string;
// 	startDate: IDate;
// 	state: number;
// 	subject: number;
// 	task: string;
// }
//
// class Tig {
// 	date: string = null;
// 	endDate: string = null;
// 	id: number;
// 	issuer: number;
// 	reason: string;
// 	startDate: string;
// 	state: number;
// 	subject: number;
// 	task: string;
//
// 	constructor(tig : ITig) {
// 		const date = new Date((tig.date) ? tig.date.date : "");
// 		const endDate = new Date((tig.date) ? tig.date.date : "");
// 		const startDate = new Date((tig.date) ? tig.date.date : "");
//
// 		this.date = `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
// 		this.endDate = `${endDate.toLocaleDateString()}\n${endDate.toLocaleTimeString()}`;
// 		this.id = tig.id;
// 		this.issuer = tig.issuer;
// 		this.reason = tig.reason;
// 		this.startDate = `${startDate.toLocaleDateString()}\n${startDate.toLocaleTimeString()}`;
// 		this.state = tig.state;
// 		this.subject = tig.subject;
// 		this.task = tig.task;
// 	}
// }