import OrdenesController from './ordenes/controller/ordenController';
import infra from '../Infra/services';

const Ordenes = new OrdenesController(new infra());

export { Ordenes };
