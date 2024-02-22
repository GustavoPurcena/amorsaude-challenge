export interface EntityI {
	id: number;
	razaoSocial: string;
	nomeFantasia: string;
	cnpj: string;
	regional: string;
	dataInauguracao: Date;
	ativa?: boolean;
	especialidadesMedicasAtendidas: string[];
}
