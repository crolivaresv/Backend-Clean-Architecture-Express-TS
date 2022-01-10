import { Ordenes } from '../domain/ordenes/ordenEntity';
import { Iinfra } from '../../../Infra/services';
export interface IOrdenesService {
    editarOrden: (orden: Ordenes) => Promise<string>;
    listarOrden: (orden: Ordenes) => Promise<string>;
}
export default class OrdenesService implements IOrdenesService {
    mongo: any;
    protected ucOrdenes: any;
    protected _infra: Iinfra;
    constructor(infra: Iinfra);
    editarOrden(orden: Ordenes): Promise<string>;
    listarOrden(): Promise<string>;
}
