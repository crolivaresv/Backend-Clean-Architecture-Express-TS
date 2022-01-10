import { AxiosResponse } from 'axios';
export declare abstract class abstractBaseRepository {
    protected abstract obtener(url: string): Promise<AxiosResponse<any, any>>;
    protected abstract enviar(url: string): Promise<AxiosResponse<any, any>>;
    protected abstract actualizar(url: string): Promise<AxiosResponse<any, any>>;
    protected abstract eliminar(url: string): Promise<AxiosResponse<any, any>>;
}
