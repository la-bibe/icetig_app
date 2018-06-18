import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {SessionService} from './session.service';
import {Observable} from "rxjs/Observable";


@Injectable()
export class PermissionsService {
	aclUrl: string = '/assets/permissions.json';
	acl: object = null;
	permissions: object = null;

	constructor(private http: HttpClient,
	            private apiService: ApiService,
	            private sessionService: SessionService) {
	}

	getAcl() {
		return this.http.get(this.aclUrl).toPromise();
	}

	getPermissions() {
		return this.apiService.getPermissions(this.sessionService.getID());
	}

	hasPermission(action: string, target: number) {

		if (this.permissions === null) {
			this.getPermissions()
				.then((permissions: IPermissions) => {
					this.permissions = permissions.data;
					return this.hasPermission(action, target);
				})
		} else if (this.acl === null) {
			this.getAcl()
				.then((acl: IActionsAcl) => {
					this.acl = acl.parameters.action_acl;
					return this.hasPermission(action, target);
				})
		} else {

			if (!this.acl.hasOwnProperty(action)) {
				return false;
			}

			for (const key of Object.keys(this.acl[action])) {

				if (!this.permissions.hasOwnProperty(key)) {
					return false;
				}

				for (const ace of this.acl[action][key]) {
					if (this.permissions[key].hasOwnProperty('*') &&
						this.permissions[key]['*'].hasOwnProperty(ace) &&
						this.permissions[key]['*'][ace]) {
						continue;
					}

					if (target === -1) {
						return false;
					}

					this.apiService.getGroups(target)
						.then(groups => {
							groups = (groups as IGroups).data;

							for (const group in groups) {

								if (!this.permissions[key].hasOwnProperty(group) ||
									!this.permissions[key][group].hasOwnProperty(ace) ||
									!this.permissions[key][group][ace]) {
									return false;
								}
							}
						})
						.catch(error => {
							console.log(error);
						});
				}
			}

			console.log("He has permission");
			return true;

		}

	}

}

interface IActionsAcl {
	parameters: {
		action_acl: object;
	};
}

interface IPermissions {
	data: {
		user: object;
		user_group: object;
		user_info: object;
		user_permissions: object;
		user_sanctions: object;
	};
}

interface IGroups {
	data: IGroup[];
}

interface IGroup {
	id: number;
	name: string;
	parent: IGroup;
}
