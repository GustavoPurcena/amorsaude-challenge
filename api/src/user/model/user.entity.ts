import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	username: string;

	@Column({ unique: true })
	email: string;

	@Column({ select: false })
	password: string;

	@BeforeInsert()
	@BeforeUpdate()
	emailToLowerCase() {
		this.email = this.email.toLowerCase();
		this.username = this.username.toLowerCase();
	}
}
