import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {RandomNumber} from '../classes/randomNumber';
import {SubSink} from 'subsink';
import {RandomNumberService} from '../ngrx/services/random-number.service';

@Component({
  selector: 'app-without-lazy-loading-test',
  templateUrl: './without-lazy-loading-test.component.html',
  styleUrls: ['./without-lazy-loading-test.component.css']
})
export class WithoutLazyLoadingTestComponent implements OnInit {

  loading$: Observable<boolean>;
  randomNumbers$: Observable<RandomNumber[]>;
  constructor(private randomService: RandomNumberService) {
    this.randomNumbers$ = randomService.entities$;
    this.loading$ = randomService.loading$;
  }

  ngOnInit() {
    this.getRandomNumbers();
  }

  add(randomNumber: RandomNumber) {
    this.randomService.add(randomNumber);
  }



  getRandomNumbers() {
    this.randomService.getAll();
  }

}
