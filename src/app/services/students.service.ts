import {Injectable} from '@angular/core';
import {students} from "../students";
import {getRandomString} from "selenium-webdriver/safari";

@Injectable()
export class StudentsService {

	constructor() {
	}

	getRandomInt(min: number, max: number): number {

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	getRandomStudent(promotion = null): [string, number] {

		let randomStudent = null

		do {

			randomStudent = students[this.getRandomInt(0, students.length - 1)]

		} while (promotion != null && randomStudent[1] != promotion)

		return randomStudent
	}

}
