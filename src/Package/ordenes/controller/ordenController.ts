import { IUCOrden, UCOrdenes } from '../domain/usecases/Ordenes';
import { Ordenes } from '../domain/ordenes/ordenEntity';
import infra, { Iinfra } from '../../../Infra/services';

export interface IOrdenesService {
  editarOrden: (orden: Ordenes) => Promise<string>;
  listarOrden: (orden: Ordenes) => Promise<string>;
}

export default class OrdenesService implements IOrdenesService {
  mongo: any;
  protected ucOrdenes: any;
  protected _infra: Iinfra;
  constructor(infra: Iinfra) {
    this.ucOrdenes = new UCOrdenes();
    this._infra = infra;
  }
  async editarOrden(orden: Ordenes): Promise<string> {
    try {
      const result = this.ucOrdenes.editarOrden(orden);
      if (typeof result === 'boolean') throw new Error('Venia malo');
      return '';
      //return this.persistence.guardar(result);
    } catch (e) {
      throw new Error('Ta malo!');
    }
  }
  async listarOrden(): Promise<string> {
    try {
      const obtenerOrdenes = await this._infra.fetchers.ordenes.todos();
      return this.ucOrdenes.listarOrden(obtenerOrdenes);
    } catch (e) {
      throw new Error('Ta malo!');
    }
  }
}
