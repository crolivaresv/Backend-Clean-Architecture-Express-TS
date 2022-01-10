import { Ordenes } from '../ordenes/ordenEntity';
import { OrdenesModel, IModel } from '../ordenes/ordenModel';

export interface IUCOrden {
  editarOrden: (orden: Ordenes) => Ordenes | boolean;
  listarOrden: (orden: Object[]) => Ordenes[];
}

export class UCOrdenes implements IUCOrden {
  protected ordenes: IModel;
  constructor() {
    this.ordenes = new OrdenesModel();
  }
  editarOrden = (orden: Ordenes): Ordenes | boolean => {
    return this.ordenes.edit(orden);
  };
  listarOrden = (ordenes: any): Ordenes[] => {
    const filtrar_completed = ordenes.data
      .filter((e: any) => e.completed === false)
      .map((el: any) => {
        return {
          id: el.id,
          description: el.title,
          price: 1,
          date: new Date(),
          type: 'MKP',
        };
      });
    return this.ordenes.list(filtrar_completed);
  };
}
