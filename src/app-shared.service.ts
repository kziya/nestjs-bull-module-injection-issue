import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { TEST_QUEUE } from './app.constants';
import { Queue } from 'bull';

@Injectable()
export class AppSharedService {
  constructor(@InjectQueue(TEST_QUEUE) private readonly testQueue: Queue) {}
}
