import Viagem from './Viagem'

export default interface Users{
    id: number;
    tipo_user: string;
    nome: string;
    birthday: string;
    genero: string;
    usuario: string;
    senha: string;
    foto: string;
    avaliacao: number;
    viagem?: Viagem | null;
}