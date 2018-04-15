import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  nav = new Array();
  navBarSizes = {open : '250px', close : '65px'};
  navBarWidth = this.navBarSizes.open;

  @Output() private onSizeChange = new EventEmitter();

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

  changeWidth = function() {
    this.navBarWidth = this.navBarWidth === this.navBarSizes.close ? this.navBarSizes.open : this.navBarSizes.close;
    this.onSizeChange.emit(this.navBarWidth);
  }
}
