import { Injectable } from '@nestjs/common';
import { AppSharedService } from './app-shared.service';
import { AppRepository } from './app.repository';
import { InjectQueue } from '@nestjs/bull';
import { TEST_QUEUE } from './app.constants';
import { Queue } from 'bull';

@Injectable()
export class AppService extends AppSharedService {
  constructor(
    private readonly appRepository: AppRepository,
    @InjectQueue(TEST_QUEUE) testQueue: Queue,
  ) {
    const isInstanceOf = appRepository instanceof AppRepository;

    console.log({ isInstanceOf, appRepository });
    super(testQueue);
  }
}
