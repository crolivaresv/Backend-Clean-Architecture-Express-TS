import { Request, Response } from 'express';

export default ({ Ordenes }: { Ordenes: any }) =>
  (codes: any) => {
    return {
      todos: async (req: Request, res: Response) =>
        res.status(codes.OK).json(await Ordenes.listarOrden()),
    };
  };
