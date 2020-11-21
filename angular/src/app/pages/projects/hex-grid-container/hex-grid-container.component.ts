import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hex-grid-container',
  templateUrl: './hex-grid-container.component.html',
  styleUrls: ['./hex-grid-container.component.scss']
})
export class HexGridContainerComponent implements OnInit {

  items : Array<string> = [...Array(15).keys()].map(x => (x+1).toString());

  constructor() { }

  ngOnInit(): void {
  }

}
