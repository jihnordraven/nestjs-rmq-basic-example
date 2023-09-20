import { NestFactory } from '@nestjs/core';
import { FilesModule } from './files.module';
import { RmqService } from 'libs/common/src/rmq/rmq.service';
import { INestApplication } from '@nestjs/common';

const bootstrap = async () => {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   FilesModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://localhost:5672'],
  //       queue: 'MAIN',
  //       noAck: true,
  //       persistent: true,
  //     },
  //   },
  // );

  // await app.listen();

  // Exactly the same ---

  const app: INestApplication =
    await NestFactory.create<INestApplication>(FilesModule);

  const rmqService: RmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions({ queue: 'MAIN', noAck: true }),
  );

  await app.startAllMicroservices();
};

bootstrap();
