import { RegionalEntity } from 'src/entity/model/regional/regional.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseSetup1708613679104 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const entityManager = queryRunner.manager;
		const regionalEntityRepository =
			entityManager.getRepository(RegionalEntity);
		const regionalLabels = [
			'Alto tietê',
			'Interior',
			'ES',
			'SP Interior',
			'SP',
			'SP2',
			'MG',
			'Nacional',
			'SP CAV',
			'RJ',
			'SP2',
			'SP1',
			'NE1',
			'NE2',
			'SUL',
			'Norte',
		];
		const regionalEntities = [];

		for (const label of regionalLabels) {
			const regionalEntity = new RegionalEntity();
			regionalEntity.label = label;
			regionalEntities.push(regionalEntity);
		}

		await regionalEntityRepository.save(regionalEntities);
	}

	public async down(): Promise<void> {}
}
