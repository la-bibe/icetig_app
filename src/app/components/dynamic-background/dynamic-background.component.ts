import { Component, OnInit, AfterViewInit } from '@angular/core';

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
    this.logoList = new Array(this.createLogoProperties(1),
      this.createLogoProperties(2),
      this.createLogoProperties(3),
      this.createLogoProperties(8),
      this.createLogoProperties(9));
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.logoList.length; i++) {
      this.moveLogo(this.logoList[i]);
    }
  }

  randomNeg = function() {
    return(Math.random() < 0.5 ? 1 : -1);
  };

  createLogoProperties = function(ratio) {
    const logo = {x: 500, y: 300, rotateSpeed: ratio, vx: 500, vy: 300};

    const x = Math.floor((Math.random() * (this.innerWidth)) - ratio * this.zoomRatio / 2);
    const y = Math.floor((Math.random() * (this.innerHeight)) - ratio * this.zoomRatio / 2);

    logo.vx = Math.floor((Math.random() + 1) * this.randomNeg());
    logo.vy = Math.floor((Math.random() + 1) * this.randomNeg());
    const norm = Math.sqrt(logo.vx * logo.vx + logo.vy * logo.vy);
    logo.vx /= norm;
    logo.vy /= norm;

    logo.x = x;
    logo.y = y;
    return logo;
  };

  newLogoProperties = function(logo, innerWidth, innerHeight, zoomRatio) {

    const expandedWidth = innerWidth + logo.rotateSpeed * zoomRatio;
    const expandedHeight = innerHeight + logo.rotateSpeed * zoomRatio;

    var p = Math.random() * (expandedWidth + expandedHeight) * 2;
    if (p < (expandedWidth + expandedHeight)) {
      if (p < expandedWidth) {
        logo.x = p;
        logo.y = 0;
      } else {
        logo.x = expandedWidth;
        logo.y = p - expandedWidth;
      }
    } else {
      p = p - (expandedWidth + expandedHeight);
      if (p < expandedWidth) {
        logo.x = expandedWidth - p;
        logo.y = expandedHeight;
      } else {
        logo.x = 0;
        logo.y = expandedHeight - (p - expandedWidth);
      }
    }

    logo.x -= (logo.rotateSpeed * zoomRatio);
    logo.y -= (logo.rotateSpeed * zoomRatio);

    logo.vx = Math.floor((Math.random() + 1) * (Math.random() < 0.5 ? 1 : -1));
    logo.vy = Math.floor((Math.random() + 1) * (Math.random() < 0.5 ? 1 : -1));
    const norm = Math.sqrt(logo.vx * logo.vx + logo.vy * logo.vy);
    logo.vx /= norm;
    logo.vy /= norm;
  };

  moveLogo = function(elem) {
    setInterval(frame, elem.rotateSpeed * 10, this.newLogoProperties, this.zoomRatio);
    function frame(newLogoProperties, zoomRatio) {
      if ((elem.x < -elem.rotateSpeed * zoomRatio && elem.vx < 0) ||
        (elem.y < -elem.rotateSpeed * zoomRatio && elem.vy < 0) ||
        (elem.x > this.innerWidth && elem.vx > 0) ||
        (elem.y > this.innerHeight && elem.vy > 0)) {
        newLogoProperties(elem, this.innerWidth, this.innerHeight, zoomRatio);
      } else {
        elem.x += elem.vx / 10;
        elem.y += elem.vy / 10;
      }
    }
  };
}
