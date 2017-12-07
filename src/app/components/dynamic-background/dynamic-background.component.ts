import {Component, OnInit, AfterViewInit, Input} from '@angular/core';

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

  @Input() height: string;
  @Input() width: string;
  constructor() {
    /*Get Screen properties*/
    this.width = (this.height ? this.height : '100%');
    this.height = (this.width ? this.width : '100vh');
    this.innerHeight = window.screen.height;
    this.innerWidth = window.screen.width;

    /*Calculate ZoomRatio according to screen size*/
    this.zoomRatio = ((this.innerWidth < this.innerHeight) ? this.innerWidth : this.innerHeight) / 10;
  }

  ngOnInit() {

    /*Generate logos in background (Size interval between 0 and 10)*/
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

  createCoords = function (logo, innerWidth, innerHeight, zoomRatio) {
    const expandedWidth = innerWidth + logo.ratio * zoomRatio;
    const expandedHeight = innerHeight + logo.ratio * zoomRatio;
    const coord = {x: 0, y: 0};

    let p = 0;
    let pval = logo.p;

    while (logo.p === pval) {
      p = Math.random() * (expandedWidth + expandedHeight) * 2;
      if (logo.p != 1 && p < expandedWidth) {
        coord.x = p;
        coord.y = 0;
        pval = 1;
      } else if (logo.p != 2 && p < expandedWidth + expandedHeight) {
        coord.x = expandedWidth;
        coord.y = p - expandedWidth;
        pval = 2;
      } else if (logo.p != 3 && p - (expandedWidth + expandedHeight) < expandedWidth) {
        p = p - (expandedWidth + expandedHeight);
        coord.x = expandedWidth - p;
        coord.y = expandedHeight;
        pval = 3;
      } else if (logo.p != 4) {
        p = p - (expandedWidth + expandedHeight);
        coord.x = 0;
        coord.y = expandedHeight - (p - expandedWidth);
        pval = 4;
      }
    }
    logo.p = pval;

    coord.x = Math.trunc(coord.x - logo.ratio * zoomRatio);
    coord.y = Math.trunc(coord.y - logo.ratio * zoomRatio);
    return coord;
  };

  newLogoProperties = function (logo, innerWidth, innerHeight, zoomRatio, createCoords) {

    var coord = createCoords(logo, innerWidth, innerHeight, zoomRatio);
    logo.x = coord.x + 'px';
    logo.y = coord.y + 'px';
  };

  moveLogo = function (elem) {
    setTimeout(this.newLogoProperties, 0, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
    setInterval(this.newLogoProperties, elem.ratio * 2000 + 10000, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
  };
}
