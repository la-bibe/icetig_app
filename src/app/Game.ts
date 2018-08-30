import {ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS} from "@angular/platform-browser";

export class Game {

	private type: number;
	private score: number;
	private goal: number;
	private remain: number;
	private promotion: number;

	constructor(type: number, goal: number, promotion: number) {

		this.type = type;
		this.goal = goal;
		this.remain = goal;
		this.score = 0;
		this.promotion = promotion;
	}

	getType(): number {

		return this.type;
	}

	getGoal(): number {

		return this.goal;
	}

	getRemain(): number {

		return this.remain;
	}

	getScore(): number {

		return this.score;
	}

	getPromotion(): number {

		return this.promotion;
	}

	isFinished(): boolean {

		return this.remain <= 0;
	}

	scoreUp(right: boolean) {

		this.remain -= 1;

		if (right) {

			this.score += 1;
		}
	}
}

export class EasyGame extends Game {

	constructor(goal: number, promotion: number) {

		super(1, goal, promotion);
	}
}

export class HardGame extends Game {

	constructor(goal: number, promotion: number) {

		super(2, goal, promotion);
	}
}
