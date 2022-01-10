import { Ordenes } from './ordenEntity';

export interface IModel {
  create: (orden: Ordenes) => Ordenes;
  edit: (orden: Ordenes) => Ordenes | boolean;
  list: (orden: Ordenes[]) => Ordenes[];
}

export class OrdenesModel implements IModel {
  constructor() {}
  create = (orden: Ordenes) => orden;
  edit = (orden: Ordenes) => (orden.type === 'MKP' ? orden : false);
  list = (orden: Ordenes[]) =>
    orden.filter((el: any) => el.id === 3 || el.id === 6);
}
