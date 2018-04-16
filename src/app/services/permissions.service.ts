import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';

@Injectable()
export class PermissionsService {
    actionsAcl: object;
    permissions: object;

    constructor(private http: HttpClient, private apiService: ApiService) {
        this.http.get('/assets/permissions.json').subscribe(permissions => {
            this.actionsAcl = (permissions as IActionsAcl).parameters.action_acl;
        });

        if (window.localStorage.getItem('session')) {
            this.apiService.getPermissions(JSON.parse(window.localStorage.getItem('session')).user.id)
                .then(permissions => {
                    this.permissions = (permissions as IPermissions).data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    refreshPermission() {
        this.apiService.getPermissions(JSON.parse(window.localStorage.getItem('session')).user.id)
            .then(permissions => {
                this.permissions = (permissions as IPermissions).data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    hasPermission(action: string, target: number) {

        this.apiService.getGroups(target)
            .then(groups => {

                groups = (groups as IGroups).data;

                if (!this.actionsAcl.hasOwnProperty(action)) {
                    return false;
                }

                for (const key of Object.keys(this.actionsAcl[action])) {

                    if (!this.permissions.hasOwnProperty(key)) {
                        return false;
                    }

                    for (const ace of this.actionsAcl[action][key]) {

                        if (this.permissions[key].hasOwnProperty('*') &&
                            this.permissions[key]['*'].hasOwnProperty(ace) &&
                            this.permissions[key]['*'][ace]) {
                            continue;
                        }

                        if (target === -1) {
                            return false;
                        }

                        for (const group in groups) {

                            if (!this.permissions[key].hasOwnProperty(group) ||
                                !this.permissions[key][group].hasOwnProperty(ace) ||
                                !this.permissions[key][group][ace]) {
                                return false;
                            }
                        }
                    }
                }

                return true;
            })
            .catch(error => {
                console.log(error);
            });

        return false;
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