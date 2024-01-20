import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';

@Injectable()
export class PostService {
  constructor(private readonly trpc: TrpcService) {}

  postRouter = this.trpc.router({
    list: this.trpc.procedure.query(() => {
      // [..]
      return {
        posts: [{ id: 1, title: 'Hello' }],
      };
    }),
  });
}
