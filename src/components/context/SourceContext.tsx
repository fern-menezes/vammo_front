import { createContext } from "react";

// Define o tipo 'SourceType'
export interface SourceType {
  lat: number; // Latitude
  lng: number; // Longitude
  name: string; // Nome do local
  label: string; // Descrição ou rótulo
}

// Define o contexto com o tipo 'SourceType'
export const SourceContext = createContext<{
  source: SourceType | null;
  setSource: React.Dispatch<React.SetStateAction<SourceType | null>>;
}>({
  source: null,
  setSource: () => {}, // Função padrão para evitar erros
});
