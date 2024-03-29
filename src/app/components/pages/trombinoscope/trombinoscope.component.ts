import {Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {EasyGame, Game, HardGame} from "../../../Game";
import {StudentsService} from "../../../services/students.service";

@Component({
	selector: 'app-trombinoscope',
	templateUrl: './trombinoscope.component.html',
	styleUrls: ['./trombinoscope.component.scss']
})
export class TrombinoscopeComponent implements OnInit {

	@ViewChild('openModalButton') openModalButton: ElementRef;

	photoBaseUrl = "https://cdn.local.epitech.eu/userprofil/profilview/";

	chosenGoal: number = 50;
	chosenPromotion: number = 0;

	currentGame: Game;
	finalScore: number = 0;

	constructor(private studentsService: StudentsService) {

	}

	ngOnInit() {

		this.currentGame = null;

	}

	chooseGoal(goal: number) {

		this.chosenGoal = goal;
	}

	choosePromotion(promotion: number) {

		this.chosenPromotion = promotion;
	}

	onGame(): boolean {

		return this.currentGame != null;
	}

	startEasyGame() {

		this.currentGame = new EasyGame(this.chosenGoal, this.chosenPromotion);
	}

	startHardGame() {

		this.currentGame = new HardGame(this.chosenGoal, this.chosenPromotion);
	}

	stopGame() {

		console.log("stop");
		this.currentGame = null;
	}

	endGame(event) {

		this.openModalButton.nativeElement.click();
	}
}
