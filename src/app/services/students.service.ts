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

		let randomStudent = null;

		if (promotion != null && this.getPromotions().indexOf(promotion) == -1) {

			return null;
		}

		do {

			randomStudent = students[this.getRandomInt(0, students.length - 1)]

		} while (promotion != null && randomStudent[1] != promotion);

		return randomStudent
	}

	getRandomStudents(number: number, promotion = null): [string, number][] {

		let students: [string, number][] = [];

		while (number > 0) {

			students.push(this.getRandomStudent(promotion));
			--number;
		}

		return students;
	}

	getPromotions(): number[] {

		let promotions: number[] = [];

		for (let student of students) {

			if (promotions.indexOf(student[1]) == -1) {

				promotions.push(student[1]);
			}
		}

		return promotions;
	}

}
