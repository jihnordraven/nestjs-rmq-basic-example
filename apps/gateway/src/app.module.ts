import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqModule } from 'libs/common/src/rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RmqModule.register({ name: 'MAIN' }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
})
export class AppModule {}
