import { IBankferRepository } from '../../../Infra/services/fetchers/adapters/bankferRepository';
import { IOrdersRepository } from '../../../Infra/services/fetchers/adapters/ordersRepository';
import { bankferRepository, ordersRepository } from '../fetchers/adapters';

export interface Ifetchers {
  bankfer: IBankferRepository;
  ordenes: IOrdersRepository;
}

export default class fetchers implements Ifetchers {
  public bankfer: IBankferRepository;
  public ordenes: IOrdersRepository;
  constructor() {
    this.bankfer = new bankferRepository();
    this.ordenes = new ordersRepository();
  }
}
