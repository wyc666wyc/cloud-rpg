import { Injectable } from '@nestjs/common';
import { CreateUuDto } from './dto/create-uu.dto';
import { UpdateUuDto } from './dto/update-uu.dto';

@Injectable()
export class UuService {
  create(createUuDto: CreateUuDto) {
    return 'This action adds a new uu';
  }

  findAll() {
    return `This action returns all uu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uu`;
  }

  update(id: number, updateUuDto: UpdateUuDto) {
    return `This action updates a #${id} uu`;
  }

  remove(id: number) {
    return `This action removes a #${id} uu`;
  }
}
