import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { UserService } from './user.service';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, UserService, PostService],
})
export class TrpcModule {}
