import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../context/DestinationContext";
import { SourceContext } from "../context/SourceContext";

const containerStyle = {
  width: "100%",
  height: "38rem",
};

export default function HomeMap() {
  const [center, setCenter] = useState({
    lat: -23.5475,
    lng: -46.6361, // Centro inicial: São Paulo
  });

  const { source } = useContext(SourceContext); // Obtém a origem
  const { destination } = useContext(DestinationContext); // Obtém o destino

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResult, setDirectionsResult] = useState<google.maps.DirectionsResult | null>(null); // Estado para a rota

  // Atualiza o centro do mapa quando o 'source' mudar
  useEffect(() => {
    if (source && map) {
      const newCenter = { lat: source.lat, lng: source.lng };
      map.panTo(newCenter); // Move o mapa para o novo centro
      setCenter(newCenter); // Atualiza o estado do centro
    }
  }, [source, map]);

  // Atualiza o centro do mapa quando o 'destination' mudar
  useEffect(() => {
    if (destination && map) {
      const newCenter = { lat: destination.lat, lng: destination.lng };
      map.panTo(newCenter); // Move o mapa para o novo centro
      setCenter(newCenter); // Atualiza o estado do centro
    }
  }, [destination, map]);

  // Função para calcular e renderizar a rota
  const directionRoute = () => {
    const DirectionsService = new google.maps.DirectionsService();

    if (source && destination) {
      DirectionsService.route(
        {
          origin: { lat: source.lat, lng: source.lng }, // Origem
          destination: { lat: destination.lat, lng: destination.lng }, // Destino
          travelMode: google.maps.TravelMode.DRIVING, // Modo de viagem
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirectionsResult(result); // Salva o resultado no estado
            console.log("Rota calculada com sucesso:", result);
          } else {
            console.error(`Erro ao calcular a rota: ${status}`);
          }
        }
      );
    } else {
      console.error("Origem ou destino não definidos.");
    }
  };

  // Chama a função para calcular a rota quando 'source' e 'destination' estão definidos
  useEffect(() => {
    if (source && destination) {
      directionRoute();
    }
  }, [source, destination]);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map); // Salva o mapa carregado no estado
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null); // Reseta o estado do mapa ao desmontar
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // Define o centro inicial do mapa
      zoom={10} // Define o zoom inicial
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Marcador para origem */}
      {source ? (
        <Marker
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: "https://ik.imagekit.io/grupo03/Vammo/origem.png", // Ícone customizado
            scaledSize: new window.google.maps.Size(20, 20), // Ajusta o tamanho do ícone
          }}
        />
      ) : null}

      {/* Marcador para destino */}
      {destination ? (
        <Marker
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: "https://ik.imagekit.io/grupo03/Vammo/destino.png", // Ícone customizado
            scaledSize: new window.google.maps.Size(20, 20), // Ajusta o tamanho do ícone
          }}
        />
      ) : null}

      {/* Renderiza a rota, se calculada */}
      {directionsResult && <DirectionsRenderer directions={directionsResult}
      options={{
        suppressMarkers: true, // Remove os marcadores padrão do Google
        polylineOptions: {
          strokeColor: "#212121", // Cor da linha (preto)
          strokeOpacity: 1.0, // Opacidade da linha
          strokeWeight: 5, // Largura da linha
        },
      }} />}
    </GoogleMap>
  );
}
