import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MAIN') private client: ClientProxy) {}

  @Get()
  public async getHello() {
    const originalname: string = 'origin name';
    const buffer: number[] = [1, 1, 2, 3];

    this.client.emit('pattern-handler', {
      originalname,
      buffer,
    });

    console.log(originalname, buffer);

    return 'OK';
  }
}
