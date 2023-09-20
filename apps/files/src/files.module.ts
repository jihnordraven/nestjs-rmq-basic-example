import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { RmqModule } from 'libs/common/src/rmq/rmq.module';

@Module({
  imports: [RmqModule],
  controllers: [FilesController],
})
export class FilesModule {}
