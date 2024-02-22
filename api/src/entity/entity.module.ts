import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityEntity } from './model/entity/entity.entity';
import { RegionalEntity } from './model/regional/regional.entity';

@Module({
	imports: [TypeOrmModule.forFeature([EntityEntity, RegionalEntity])],
})
export class EntityModule {}
