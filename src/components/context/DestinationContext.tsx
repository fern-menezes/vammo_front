import { createContext } from "react";

// Define o tipo 'SourceType'
export interface DestinationType {
  lat: number; // Latitude
  lng: number; // Longitude
  name: string; // Nome do local
  label: string; // Descrição ou rótulo
}

// Define o contexto com o tipo 'DestinationType'
export const DestinationContext = createContext<{
  destination: DestinationType | null;
  setDestination: React.Dispatch<React.SetStateAction<DestinationType | null>>;
}>({
    destination: null,
    setDestination: () => {}, // Função padrão para evitar erros
});
