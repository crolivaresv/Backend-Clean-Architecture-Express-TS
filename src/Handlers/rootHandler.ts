import { Request, Response } from 'express';

export default ({ Ordenes }: { Ordenes: any }) =>
  (codes: any) => {
    return {
      index: async (req: Request, res: Response) =>
        res.status(codes.OK).send('Bienvenidos API Max Pro 9.0'),
    };
  };
