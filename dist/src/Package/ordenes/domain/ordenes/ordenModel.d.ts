import { Ordenes } from './ordenEntity';
export interface IModel {
    create: (orden: Ordenes) => Ordenes;
    edit: (orden: Ordenes) => Ordenes | boolean;
    list: (orden: Ordenes[]) => Ordenes[];
}
export declare class OrdenesModel implements IModel {
    constructor();
    create: (orden: Ordenes) => Ordenes;
    edit: (orden: Ordenes) => false | Ordenes;
    list: (orden: Ordenes[]) => Ordenes[];
}
