import { Ordenes } from '../ordenes/ordenEntity';
import { IModel } from '../ordenes/ordenModel';
export interface IUCOrden {
    editarOrden: (orden: Ordenes) => Ordenes | boolean;
    listarOrden: (orden: Object[]) => Ordenes[];
}
export declare class UCOrdenes implements IUCOrden {
    protected ordenes: IModel;
    constructor();
    editarOrden: (orden: Ordenes) => Ordenes | boolean;
    listarOrden: (ordenes: any) => Ordenes[];
}
