import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FilesController {
  @EventPattern('pattern-handler')
  async handleOrderCreated(@Payload() data: string) {
    console.log(data);
  }
}
