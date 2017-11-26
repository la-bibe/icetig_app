import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-background',
  templateUrl: './dynamic-background.component.html',
  styleUrls: ['./dynamic-background.component.scss']
})
export class DynamicBackgroundComponent implements OnInit {
  randomSpeed = Math.random() * 50 + 50;
  constructor() { }

  ngOnInit() {
  }
}
