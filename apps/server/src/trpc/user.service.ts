import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';

@Injectable()
export class UserService {
  constructor(private readonly trpc: TrpcService) {}

  userRouter = this.trpc.router({
    find: this.trpc.procedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(({ input }) => {
        const { id } = input;

        return {
          user: { id: id, name: 'John' },
        };
      }),

    list: this.trpc.procedure.query(() => {
      // [..]
      return {
        users: [{ id: 1, name: 'John' }],
      };
    }),
  });
}
