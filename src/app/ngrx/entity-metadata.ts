import {DefaultDataServiceConfig, EntityMetadataMap} from '@ngrx/data';
import {environment} from '../../environments/environment';

const entityMetadata: EntityMetadataMap = {
  randomNumber: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { randomNumber: 'randomNumbers' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};


export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.url_BAKEND,
  entityHttpResourceUrls: {

    randomNumber: {
      entityResourceUrl: environment.url_BAKEND + '/user/fetch',
      collectionResourceUrl: environment.url_BAKEND + '/user/fetch',
    }


  }
};
