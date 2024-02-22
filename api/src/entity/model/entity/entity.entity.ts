import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { ArrayMinSize } from 'class-validator';
import { RegionalEntity } from '../regional/regional.entity';

@Entity()
export class EntityEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	razaoSocial: string;

	@Column({ nullable: false })
	nomeFantasia: string;

	@Column({ unique: true })
	cnpj: string;

	@ManyToOne(() => RegionalEntity)
	@JoinColumn({ name: 'regional_id' })
	regional: RegionalEntity;

	@Column({ type: 'date', nullable: false })
	dataInauguracao: Date;

	@Column({ default: false })
	ativa: boolean;

	@Column('text', { array: true })
	@ArrayMinSize(5, {
		message:
			'Selecione ao menos 5 items para especialidadesMedicasAtendidas',
	})
	especialidadesMedicasAtendidas: string[];
}
