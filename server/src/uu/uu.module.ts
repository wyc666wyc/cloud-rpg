import { Module } from '@nestjs/common';
import { UuService } from './uu.service';
import { UuController } from './uu.controller';

@Module({
  controllers: [UuController],
  providers: [UuService]
})
export class UuModule {}
