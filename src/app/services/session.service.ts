import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {
	session: ISession;

	constructor() {
		this.session = JSON.parse(localStorage.getItem('session'));
	}

	getSession() {
		return this.session;
	}

	getID() {
		return this.session.user.id;
	}

}

interface ISession {
	expirationDate: number;
	generationDate: number;
	signatureToken: string;
	user: {
		id: number;
		email: string;
		firstname: string
		lastname: string;
	}
}
