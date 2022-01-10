import { IBankferRepository } from '../../../Infra/services/fetchers/adapters/bankferRepository';
import { IOrdersRepository } from '../../../Infra/services/fetchers/adapters/ordersRepository';
export interface Ifetchers {
    bankfer: IBankferRepository;
    ordenes: IOrdersRepository;
}
export default class fetchers implements Ifetchers {
    bankfer: IBankferRepository;
    ordenes: IOrdersRepository;
    constructor();
}
