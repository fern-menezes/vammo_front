import { useState } from "react";
import { SourceContext, SourceType } from "../../components/context/SourceContext";
import { DestinationContext, DestinationType } from "../../components/context/DestinationContext";
import HomeSearch from "../../components/homesearch/HomeSearch";
import HomeMap from "../../components/googlemaps/Googlemaps";
import { LoadScriptNext } from "@react-google-maps/api";
import Data from "../../components/data/Data";

export default function Dashboard() {
  const [source, setSource] = useState<SourceType | null>(null);
  const [destination, setDestination] = useState<DestinationType | null>(null);

  return (
    <>
      <SourceContext.Provider value={{ source, setSource }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <LoadScriptNext
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            libraries={['places']}
          >
            <main className="grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="p-8 ml-20">
                <section>
                  <h2>Olá, Stanley!</h2>
                  <p className="mb-5">Busque pelo seu destino com os melhores preços!</p>
                  <HomeSearch />
                </section>

                <section>
                  <Data />
                </section>
              </div>

              <div className="p-10">
                <HomeMap />
              </div>
            </main>
          </LoadScriptNext>
        </DestinationContext.Provider>
      </SourceContext.Provider>
    </>
  );
}
