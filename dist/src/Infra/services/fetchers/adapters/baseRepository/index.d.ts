import { abstractBaseRepository } from '../../abstracts/abstractBaseRepository';
export default class baseFetchersRepository extends abstractBaseRepository {
    protected axios: any;
    protected obtener(url: string): Promise<any>;
    protected enviar(url: string): any;
    protected actualizar(url: string): any;
    protected eliminar(url: string): any;
}
