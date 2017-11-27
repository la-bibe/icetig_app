import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-background',
  templateUrl: './dynamic-background.component.html',
  styleUrls: ['./dynamic-background.component.scss']
})

export class DynamicBackgroundComponent implements OnInit, AfterViewInit {
  logoList;
  innerHeight: any;
  innerWidth: any;
  zoomRatio = 50;

  constructor() {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    if (this.innerWidth < this.innerHeight) {
      this.zoomRatio = this.innerWidth / 10;
    } else {
      this.zoomRatio = this.innerHeight / 10;
    }
  }

  ngOnInit() {
    this.logoList = new Array(this.createLogoProperties(6),
      this.createLogoProperties(2),
      this.createLogoProperties(3),
      this.createLogoProperties(7),
      this.createLogoProperties(5),
      this.createLogoProperties(9));
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.logoList.length; i++) {
      this.moveLogo(this.logoList[i]);
    }
  }

  randomNeg = function () {
    return (Math.random() < 0.5 ? 1 : -1);
  };

  createLogoProperties = function (ratio) {
    const logo = {x: 500, y: 300, rotateSpeed: ratio, vx: 500, vy: 300};

    const x = Math.floor((Math.random() * (this.innerWidth)) - ratio * this.zoomRatio / 2);
    const y = Math.floor((Math.random() * (this.innerHeight)) - ratio * this.zoomRatio / 2);

    logo.x = x;
    logo.y = y;
    return logo;
  };

  newLogoProperties = function (logo, innerWidth, innerHeight, zoomRatio, createCoords) {

    let coord = createCoords(logo, innerWidth, innerHeight, zoomRatio);
    logo.x = coord.x;
    logo.y = coord.y;
  };

  createCoords = function (logo, innerWidth, innerHeight, zoomRatio) {
    const expandedWidth = innerWidth + logo.rotateSpeed * zoomRatio;
    const expandedHeight = innerHeight + logo.rotateSpeed * zoomRatio;
    const coord = {x: 0, y: 0};

    let p = Math.random() * (expandedWidth + expandedHeight) * 2;
    if (p < (expandedWidth + expandedHeight)) {
      if (p < expandedWidth) {
        coord.x = p;
        coord.y = 0;
      } else {
        coord.x = expandedWidth;
        coord.y = p - expandedWidth;
      }
    } else {
      p = p - (expandedWidth + expandedHeight);
      if (p < expandedWidth) {
        coord.x = expandedWidth - p;
        coord.y = expandedHeight;
      } else {
        coord.x = 0;
        coord.y = expandedHeight - (p - expandedWidth);
      }
    }

    coord.x -= (logo.rotateSpeed * zoomRatio);
    coord.y -= (logo.rotateSpeed * zoomRatio);

    return coord;
  };

  moveLogo = function (elem) {
    function frame(newLogoProperties, zoomRatio, createCoords, innerWidth, innerHeight) {
      newLogoProperties(elem, innerWidth, innerHeight, zoomRatio, createCoords);
    }

   setTimeout(frame, 0, this.newLogoProperties, this.zoomRatio,
     this.createCoords, this.innerWidth, this.innerHeight);
    setInterval(frame, elem.rotateSpeed * 2000 + 10000, this.newLogoProperties, this.zoomRatio,
      this.createCoords, this.innerWidth, this.innerHeight);
  };
}
