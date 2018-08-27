import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../services/students.service";

@Component({
	selector: 'app-trombinoscope',
	templateUrl: './trombinoscope.component.html',
	styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {

	photoBaseUrl = "/assets/photos/";

	randomStudents: [string, number][];
	randomStudentOnePhotoUrl: string = null;
	randomStudentTwoPhotoUrl: string = null;

	promotions: number[] = [];

	constructor(private studentService: StudentsService) {

	}

	ngOnInit() {

		this.promotions = this.studentService.getPromotions();

		setInterval(() => {

			this.randomStudents = this.studentService.getRandomStudents(4, 2021);
			this.randomStudentOnePhotoUrl = `${this.photoBaseUrl}${this.randomStudents[this.studentService.getRandomInt(0, 3)][0]}.bmp`;
			this.randomStudentTwoPhotoUrl = `${this.photoBaseUrl}${this.studentService.getRandomStudent(2021)[0]}.bmp`;

		}, 1000);

	}
}
