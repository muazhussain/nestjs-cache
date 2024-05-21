import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { StudentModule } from './student/student.module';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 30 * 1000,
      store: redisStore,
    }),
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
