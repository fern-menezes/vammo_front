import Viagem from './Viagem'

export default interface Veiculo {
    id:	number;
    modelo:string;
    placa:string;
    cor:string;
    ano_fabricacao:string;
    foto:string;
    observacao:string;
    disponivel:string;
    viagem?: Viagem | null;

}