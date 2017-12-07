import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  nav = new Array();
  navopen = true;

  constructor() {
    this.nav = [this.newTab(`DashBoard`, 'icons/nav-dashboard.svg', '/'),
      this.newTab(`TIG`, 'icons/nav-tig.svg', '/tig'),
      this.newTab(`Shifts`, 'icons/nav-shifts.svg', '/shifts'),
      this.newTab(`Students`, 'icons/nav-students.svg', '/students'),
      this.newTab(`Marks`, 'icons/nav-marks.svg', '/marks')];
  }

  ngOnInit() {
  }

  newTab(name, svg, link) {
    return {name: name, svglink: svg, link: link};
  }

  changeWidth = function(){
    this.navopen = !this.navopen;
  }
}
