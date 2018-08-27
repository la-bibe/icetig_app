import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../services/students.service";

@Component({
	selector: 'app-trombinoscope',
	templateUrl: './trombinoscope.component.html',
	styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {

	photoBaseUrl = "/assets/photos/";

	randomStudentOne: string = null;
	randomStudentTwo: string = null;

	constructor(private studentService: StudentsService) {

	}

	ngOnInit() {

		setInterval(() => {

			const student1: [string, number] = this.studentService.getRandomStudent("21");
			const student2: [string, number] = this.studentService.getRandomStudent("21");

			this.randomStudentOne = this.photoBaseUrl + student1[0] + ".bmp";
			this.randomStudentTwo = this.photoBaseUrl + student2[0] + ".bmp";

		}, 500);

	}
}
