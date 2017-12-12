import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tig',
  templateUrl: './tig.component.html',
  styleUrls: ['./tig.component.scss']
})
export class TigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('tig loaded');
  }

}
