import baseFetchersRepository from '../baseRepository';
export interface IOrdersRepository {
    todos: () => Promise<string[]>;
    numero1: () => Promise<string[]>;
}
export default class ordersRepository extends baseFetchersRepository implements IOrdersRepository {
    protected axios: any;
    constructor();
    todos: () => Promise<any>;
    numero1: () => Promise<any>;
}
