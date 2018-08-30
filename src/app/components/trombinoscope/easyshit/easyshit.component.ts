import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StudentsService} from "../../../services/students.service";
import {EasyGame, Game} from "../../../Game";

@Component({
	selector: 'app-easyshit',
	templateUrl: './easyshit.component.html',
	styleUrls: ['./easyshit.component.scss']
})
export class EasyshitComponent implements OnInit, OnChanges {

	@Output() finishedGame = new EventEmitter();
	@Input() currentGame: Game;

	photoBaseUrl: string = "https://cdn.local.epitech.eu/userprofil/profilview/";
	randomStudent: [string, number];
	randomStudents: [string, number][];
	randomStudentPhotoUrl: string;

	chosenStudent: [string, number] = null;
	promotions: number[] = [];

	constructor(private studentsService: StudentsService) {

	}

	ngOnInit() {

		this.currentGame = null;

		this.promotions = this.studentsService.getPromotions();

		this.reRoll();
	}

	ngOnChanges(changes: SimpleChanges) {

		this.reRoll();

		this.currentGame = changes.currentGame.currentValue;
	}

	onSubmit(event) {

		for (let student of this.randomStudents) {

			if (event.target.innerText == student[0]) {

				this.chosenStudent = student;
			}
		}

		if (this.chosenStudent[0] == this.randomStudent[0]) {

			if (this.onGame()) {

				this.currentGame.scoreUp(true);

				if (!this.currentGame.isFinished()) {

					this.reRoll();
				}
			} else {

				this.reRoll();
			}

		} else if (this.onGame()) {

			this.currentGame.scoreUp(false);

			if (!this.currentGame.isFinished()) {

				this.reRoll();
			}
		}

		if (this.onGame() && this.currentGame.isFinished()) {

			this.finishedGame.emit();
		}
	}

	onGame(): boolean {

		return this.currentGame != null;
	}

	reRoll() {

		this.randomStudents = this.studentsService.getRandomStudents(4,
			(this.onGame())
			? this.currentGame.getPromotion()
			: null);

		this.randomStudent = this.randomStudents[this.studentsService.getRandomInt(0, 3)];

		this.randomStudentPhotoUrl = `${this.photoBaseUrl}${this.randomStudent[0]}.jpg`;
	}
}
