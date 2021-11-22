import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacineRoutingModule } from './racine-routing.module';
import { IndexComponent } from './index/index.component';
import { EntitiesListComponent } from './entities-list/entities-list.component';
import {EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {StoreModule} from '@ngrx/store';
import {RandomNumberService} from '../../ngrx/services/random-number.service';

const entityMetadata: EntityMetadataMap = {
  randomNumber: {}
};

@NgModule({
  declarations: [IndexComponent, EntitiesListComponent],
  imports: [
    CommonModule,
    RacineRoutingModule,

  ]
})
export class RacineModule {
  constructor(eds: EntityDefinitionService ) {
    eds.registerMetadataMap(entityMetadata);
  }
}
