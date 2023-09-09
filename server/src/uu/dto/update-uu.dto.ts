import { PartialType } from '@nestjs/mapped-types';
import { CreateUuDto } from './create-uu.dto';

export class UpdateUuDto extends PartialType(CreateUuDto) {}
