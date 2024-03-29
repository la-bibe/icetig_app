// import the required animation functions from the angular animations module
import {trigger, state, animate, transition, style} from '@angular/animations';

export const slideInOutAnimation =
	trigger('slideInOutAnimation', [

		state('*', style({
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 10001,
			opacity: 1
		})),

		transition(':leave', [
			animate('1s ease-in-out', style({
				top: 'calc(-100vh + 61px)',
			})),
			animate('.5s ease-in-out', style({
				opacity: 0
			}))
		])
	]);

export const flyInOut =
	trigger('flyInOut', [

		state('void', style({
			width: '0%',
			opacity: 0
		})),
		state('register', style({
			width: '45%',
			opacity: 1
		})),

		transition('void => register', [
			animate('.5s ease-in', style({
				width: '45%',
				opacity: 1
			}))
		]),

		transition('register => void', [
			animate('.5s ease-in', style({
				width: '0%',
				opacity: 0
			}))
		]),
	]);

export const scaleInOut =
	trigger('scaleInOut', [

		state('login', style({
			width: '100%'
		})),
		state('register', style({
			width: '48%'
		})),

		transition('login => register', [
			animate('.5s ease-in', style({
				width: '48%'
			}))
		]),

		transition('register => login', [
			animate('.5s ease-in', style({
				width: '100%'
			}))
		]),
	]);