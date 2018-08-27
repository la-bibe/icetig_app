import { Component, OnInit } from '@angular/core';
import {students} from "../../../students";

@Component({
  selector: 'app-easyshit',
  templateUrl: './easyshit.component.html',
  styleUrls: ['./easyshit.component.scss']
})
export class EasyshitComponent implements OnInit {

	todo: number = 100;
	passed: number = 0;
	score: number = 0;

	randomStudent: [string, number] = null;
	randomStudents: [string, number][] = [];
	randomStudentPhotoUrl: string = "/assets/photos/";

	choosenStudent: [string, number] = null;

	constructor() {
	}

	ngOnInit() {

		this.reRoll();
	}

	getRandomInt(min: number, max: number): number {

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	getRandomsInt(min: number, max: number): number[] {

		let rs = [];

		do {

			let r = this.getRandomInt(min, max);

			if (rs.indexOf(r) == -1) {

				rs.push(r);
			}

		} while (rs.length != 4);

		return rs;
	}

	onSubmit(event) {

		for (let student of this.randomStudents) {

			if (event.target.innerText == student[0]) {

				this.choosenStudent = student;
			}
		}

		this.passed += 1;

		if (this.score == this.todo) {

			console.log("GG");

		} else {

			if (this.choosenStudent[0] == this.randomStudent[0]) {

				this.score += 1;
			}

			this.reRoll();
		}

	}

	reRoll() {

		this.randomStudent = null;
		this.randomStudents = [];
		this.randomStudentPhotoUrl = "/assets/photos/";

		let rs: number[] = this.getRandomsInt(0, students.length - 1);

		for (let r of rs) {

			this.randomStudents.push(students[r]);
		}

		let r = this.getRandomInt(0, 3);

		this.randomStudent = this.randomStudents[r];

		console.log(r);
		console.log(this.randomStudent);

		this.randomStudentPhotoUrl += this.randomStudent[0] + ".bmp";
	}

}
