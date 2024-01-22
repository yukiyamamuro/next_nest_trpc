import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { PostService, UserService } from '@server/trpc/service_index';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, UserService, PostService],
})
export class TrpcModule {}
