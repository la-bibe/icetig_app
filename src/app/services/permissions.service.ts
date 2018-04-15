import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';

@Injectable()
export class PermissionsService {
    actionsAcl: object;
    userPermissions: object;

    constructor(private http: HttpClient, private apiService: ApiService) {
        this.http.get('/assets/permissions.json').subscribe(permissions => {
            this.actionsAcl = (permissions as IActionsAcl).parameters.action_acl;
        });

        if (window.localStorage.getItem('session')) {
            this.apiService.getPermissions(JSON.parse(window.localStorage.getItem('session')).user.id)
                .then(permissions => {
                    this.userPermissions = (permissions as IPermissions).data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    refreshPermission() {
        this.apiService.getPermissions(JSON.parse(window.localStorage.getItem('session')).user.id)
            .then(permissions => {
                this.userPermissions = (permissions as IPermissions).data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    hasPermission(action: string, target: number) {

        this.apiService.getGroups(target)
            .then(groups => {

                if (!(action in this.actionsAcl)) {
                    return false;
                }



                console.log(this.actionsAcl);
                console.log(this.userPermissions);
                console.log((groups as IGroups).data);

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