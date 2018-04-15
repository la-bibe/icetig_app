import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    navBarWidth = '250px';

    constructor() { }

    ngOnInit() {

    }

    onNavSizeChange(size) {
        this.navBarWidth = size;
    }
}
