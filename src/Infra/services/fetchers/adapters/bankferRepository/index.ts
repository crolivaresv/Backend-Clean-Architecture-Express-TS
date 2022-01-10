import axios from 'axios';
import baseFetchersRepository from '../baseRepository';

export interface IBankferRepository {}

export default class bankferRepository
  extends baseFetchersRepository
  implements IBankferRepository
{
  protected axios;
  constructor() {
    super();
    this.axios = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  }
}
