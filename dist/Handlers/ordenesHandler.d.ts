import { Request, Response } from 'express';
declare const _default: ({ Ordenes }: {
    Ordenes: any;
}) => (codes: any) => {
    todos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
