import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UuService } from './uu.service';
import { CreateUuDto } from './dto/create-uu.dto';
import { UpdateUuDto } from './dto/update-uu.dto';

@Controller('uu')
export class UuController {
  constructor(private readonly uuService: UuService) {}

  @Get('test')
  test() {
    return 'test';
  }

  @Post()
  create(@Body() createUuDto: CreateUuDto) {
    return this.uuService.create(createUuDto);
  }

  @Get()
  findAll() {
    return this.uuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUuDto: UpdateUuDto) {
    return this.uuService.update(+id, updateUuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uuService.remove(+id);
  }
}
