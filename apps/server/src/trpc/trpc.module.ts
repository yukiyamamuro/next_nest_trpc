import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { UserService } from '@server/trpc/user.service';
import { PostService } from '@server/trpc/post.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, UserService, PostService],
})
export class TrpcModule {}
