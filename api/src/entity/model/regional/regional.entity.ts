import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RegionalEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false })
	label: string;
}
