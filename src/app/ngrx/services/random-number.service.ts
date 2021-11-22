import { Injectable } from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {RandomNumber} from '../../classes/randomNumber';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('randomNumber', serviceElementsFactory);
  }
}
