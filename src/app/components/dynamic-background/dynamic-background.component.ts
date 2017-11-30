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
	  //Get Screen properties
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);

	//Calculate ZoomRatio according to screen size
    if (this.innerWidth < this.innerHeight) {
      this.zoomRatio = this.innerWidth / 10;
    } else {
      this.zoomRatio = this.innerHeight / 10;
    }
  }

  ngOnInit() {

	//Generate logos in background (Size interval betwwen 0 and 10)
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

  createLogoProperties = function (ratio) {
    const logo = {x: '0', y: '0', ratio: ratio, p: 0};

    const x = Math.trunc((Math.random() * (this.innerWidth + ratio * this.zoomRatio)) - ratio * this.zoomRatio);
    const y = Math.trunc((Math.random() * (this.innerHeight + ratio * this.zoomRatio)) - ratio * this.zoomRatio);

    logo.x = x + 'px';
    logo.y = y + 'px';
    return logo;
  };

  createCoords = function(logo, innerWidth, innerHeight, zoomRatio) {
    const expandedWidth = innerWidth + logo.ratio * zoomRatio;
    const expandedHeight = innerHeight + logo.ratio * zoomRatio;
    let coord = {x: 0, y: 0};

    let p = 0;
	let pval = logo.p;

	while (logo.p === pval) {
		p = Math.random() * (expandedWidth + expandedHeight) * 2;
		if (p < expandedWidth) {
			pval = 1;
		} else if (p < expandedWidth + expandedHeight) {
			pval = 2;
		} else if (p - (expandedWidth + expandedHeight) < expandedWidth) {
			p = p - (expandedWidth + expandedHeight);
			pval = 3;
		} else {
			p = p - (expandedWidth + expandedHeight);
			pval = 4;
		}
	}
	logo.p = pval;

	switch (logo.p) {
		case 1:
		coord.x = p;
        coord.y = 0;
		break;
		case 2:
		coord.x = expandedWidth;
        coord.y = p - expandedWidth;
		break;
		case 3:
		coord.x = expandedWidth - p;
        coord.y = expandedHeight;
		break;
		case 4:
		coord.x = 0;
        coord.y = expandedHeight - (p - expandedWidth);
		break;
		default:
	}

    coord.x = Math.trunc(coord.x - logo.ratio * zoomRatio);
    coord.y = Math.trunc(coord.y - logo.ratio * zoomRatio);
    return coord;
  }

  newLogoProperties = function (logo, innerWidth, innerHeight, zoomRatio, createCoords) {

	var coord = createCoords(logo, innerWidth, innerHeight, zoomRatio);
	logo.x =  coord.x + 'px';
	logo.y =  coord.y + 'px';
  };

  moveLogo = function (elem) {
	  setTimeout(this.newLogoProperties, 0, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
	  setInterval(this.newLogoProperties, elem.ratio * 2000 + 10000, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
  };
}
