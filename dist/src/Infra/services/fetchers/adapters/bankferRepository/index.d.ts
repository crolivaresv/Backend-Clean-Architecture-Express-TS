import baseFetchersRepository from '../baseRepository';
export interface IBankferRepository {
}
export default class bankferRepository extends baseFetchersRepository implements IBankferRepository {
    protected axios: import("axios").AxiosInstance;
    constructor();
}
