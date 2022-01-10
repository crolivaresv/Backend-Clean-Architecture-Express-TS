import { abstractBaseRepository } from '../../abstracts/abstractBaseRepository';

export default class baseFetchersRepository extends abstractBaseRepository {
  protected axios: any;

  protected async obtener(url: string) {
    return await this.axios.get(url);
  }
  protected enviar(url: string) {
    return this.axios.post(url);
  }
  protected actualizar(url: string) {
    return this.axios.put(url);
  }
  protected eliminar(url: string) {
    return this.axios.delete(url);
  }
}
