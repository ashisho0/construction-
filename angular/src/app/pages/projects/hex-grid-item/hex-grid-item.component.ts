import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hex-grid-item',
  templateUrl: './hex-grid-item.component.html',
  styleUrls: ['./hex-grid-item.component.scss']
})
export class HexGridItemComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit(): void {
  }

}
