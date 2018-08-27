import { Component, OnInit } from '@angular/core';
import {students} from "../../../students";
import {StudentsService} from "../../../services/students.service";

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

	constructor(private studentsService: StudentsService) {
	}

	ngOnInit() {

		this.reRoll();
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

		let rs: number[] = this.studentsService.getRandomStudents(4);

		for (let r of rs) {

			this.randomStudents.push(students[r]);
		}

		let r = this.getRandomInt(0, 3);

		this.randomStudent = this.randomStudents[r];

		this.randomStudentPhotoUrl += this.randomStudent[0] + ".bmp";
	}

}
