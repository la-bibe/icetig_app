import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges, ViewChild
} from '@angular/core';
import {StudentsService} from "../../../../services/students.service";
import {Game} from "../../../../Game";

@Component({
	selector: 'app-hardwork',
	templateUrl: './hardwork.component.html',
	styleUrls: ['./hardwork.component.scss']
})
export class HardworkComponent implements OnInit, OnChanges {

	@ViewChild('firstName') firstNameInput: ElementRef;
	@Output() finishedGame = new EventEmitter();
	@Input() currentGame: Game;

	photoBaseUrl: string = "https://cdn.local.epitech.eu/userprofil/profilview/";
	randomStudent: [string, number];
	randomStudentPhotoUrl: string;

	chosenFirstname: string;
	chosenLastname: string;
	chosenStudent: string;

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

		this.chosenStudent = `${this.chosenFirstname}.${this.chosenLastname}`;

		if (this.randomStudent[0] == this.chosenStudent) {

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

		this.randomStudent = this.studentsService.getRandomStudent(
			(this.onGame())
				? this.currentGame.getPromotion()
				: null);

		this.randomStudentPhotoUrl = `${this.photoBaseUrl}${this.randomStudent[0]}.jpg`;

		this.chosenFirstname = "";
		this.chosenLastname = "";

		this.firstNameInput.nativeElement.focus();
	}
}
