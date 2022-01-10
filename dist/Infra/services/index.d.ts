import fetchers from './ports/fetchers';
export interface Iinfra {
    fetchers: fetchers;
}
export default class infra implements Iinfra {
    fetchers: fetchers;
    constructor();
}
