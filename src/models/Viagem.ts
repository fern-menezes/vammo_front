import Usuario from "./Usuario";
import Veiculo from "./Veiculo";

export default interface Viagem {
    id: number;
    data_ida: string;
    origem: string;
    destino: string;
    distancia: number;
    velocidade: number;
    preco: number;
    duracao: string;
    status: string;
    veiculo?: Veiculo[] | null;
    usuario: Usuario[] | null;
    }