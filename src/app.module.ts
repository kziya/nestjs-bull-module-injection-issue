import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TEST_QUEUE } from './app.constants';
import { AppRepository } from './app.repository';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        username: 'admin',
        password: 'admin',
        host: '127.0.0.1',
        port: 8080,
      },
    }),
    BullModule.registerQueue({
      name: TEST_QUEUE,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
