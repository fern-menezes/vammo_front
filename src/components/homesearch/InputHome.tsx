import { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";

interface InputHomeProps {
  type: "source" | "destination"; // Tipando o 'type' com valores específicos
}

function InputHome({ type }: InputHomeProps) {
  const [value, setValue] = useState<{ label: string; value: any } | null>(null); // Tipagem do 'value'
  const [placeholder, setPlaceholder] = useState<string>(""); // Garantindo que seja string
  const { setSource } = useContext(SourceContext);
  const { setDestination } = useContext(DestinationContext);

  useEffect(() => {
    if (type === "source") {
      setPlaceholder("Local de partida");
    } else if (type === "destination") {
      setPlaceholder("Destino");
    }
  }, [type]); // 'type' é a dependência

  const getLatandLng = (place: any, type: string) => {
    const placeId = place?.value?.place_id; // Corrigido para acessar 'place_id'
    const service = new google.maps.places.PlacesService(document.createElement("div"));

    service.getDetails({ placeId }, (placeDetails, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && placeDetails?.geometry?.location) {
        const locationData = {
          lat: placeDetails.geometry.location.lat(),
          lng: placeDetails.geometry.location.lng(),
          name: placeDetails.formatted_address || "",
          label: placeDetails.name || "",
        };

        if (type === "source") {
          setSource(locationData);
        } else {
          setDestination(locationData);
        }
      }
    });
  };

  return (
    <div className="bg-[#F2F2F2] rounded-full placeholder-[#212121] homeinput mb-2 p-2 border-none">
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => {
            getLatandLng(place, type);
            setValue(place); // Atualiza o valor selecionado
          },
          placeholder: placeholder, // Placeholder dinâmico
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: () => null,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }),
          },
        }}
      />
    </div>
  );
}

export default InputHome;
