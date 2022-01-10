import fetchers from './ports/fetchers';

export interface Iinfra {
  fetchers: fetchers;
  //persistance: () => fetchers;
}

export default class infra implements Iinfra {
  public fetchers: fetchers;
  //public persistance: fetchers;
  constructor() {
    this.fetchers = new fetchers();
  }
}
