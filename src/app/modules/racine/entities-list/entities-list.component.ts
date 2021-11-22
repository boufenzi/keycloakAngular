import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.css']
})
export class EntitiesListComponent implements OnInit {

  @Input() randomNumber;
  constructor() { }


  ngOnInit(): void {
  }

}
