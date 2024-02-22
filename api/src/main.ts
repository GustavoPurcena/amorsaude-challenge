import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

async function runMigrations() {
	const connectionOptions: PostgresConnectionOptions = {
		type: 'postgres',
		url: process.env.DATABASE_URL,
		synchronize: true,
		entities: ['dist/**/*.entity{ .ts,.js}'],
		migrations: ['dist/migrations/*{.ts,.js}'],
	};

	const connection = await createConnection(connectionOptions);
	// run migrations
	await connection.runMigrations();
}

async function bootstrap() {
	await runMigrations();

	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
