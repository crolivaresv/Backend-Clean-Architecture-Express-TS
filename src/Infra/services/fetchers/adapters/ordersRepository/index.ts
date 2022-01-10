import axios from 'axios';
import baseFetchersRepository from '../baseRepository';

export interface IOrdersRepository {
  todos: () => Promise<string[]>;
  numero1: () => Promise<string[]>;
}

export default class ordersRepository
  extends baseFetchersRepository
  implements IOrdersRepository
{
  protected axios: any;
  constructor() {
    super();
    this.axios = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  }
  todos = async () => {
    return await this.obtener('/todos');
  };
  numero1 = async () => {
    return await this.obtener('/todos/1');
  };
}
