// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
  trigger('slideInOutAnimation', [

    state('*', style({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
