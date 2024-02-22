import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EntityModule } from './entity/entity.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DATABASE_URL,
			synchronize: true,
			autoLoadEntities: true,
			entities: ['dist/**/*.entity{ .ts,.js}'],
			migrations: ['dist/migrations/*{.ts,.js}'],
		}),
		UserModule,
		AuthModule,
		EntityModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
