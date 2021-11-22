import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubSink} from 'subsink';
import {RandomNumberService} from '../../../ngrx/services/random-number.service';
import {Observable} from 'rxjs';

import {RandomNumber} from '../../../classes/randomNumber';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  randomNumbers$: Observable<RandomNumber[]>;
 private  subSink = new SubSink();
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



  public getRandomNffffumber() {

    /*
    return this.subSink.add(this.http.get<any>(`${environment.url_BAKEND}/user/fetch`)
      .subscribe(data => {
        console.log(data.value);
        this.randomNumber = data.value;
      }, error => this.errorHandler.ExceptionsHandler(error)));

     */
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
