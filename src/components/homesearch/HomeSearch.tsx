import { useContext, useEffect } from "react";
import { DestinationContext } from "../context/DestinationContext";
import { SourceContext } from "../context/SourceContext";
import InputHome from "./InputHome";
import { ArrowRight } from '@phosphor-icons/react'


function HomeSearch() {

    const {source}=useContext(SourceContext);
    const {destination}=useContext(DestinationContext);

    useEffect(()=>{
        if(source){

        }
    },[source, destination])
    
    return (
        <div className="flex flex-col gap-1">
            <InputHome type="source" /> {/* Passando 'source' */}
            <InputHome type="destination" /> {/* Passando 'destination' */}

            <section className="p-2 bg-[var(--yellow)] text-[var(--black)] rounded-full flex items-center gap-2 resp-init-button">
                    <div className='px-2 flex flex-1 gap-2'>
                      Buscar Viagens
                    </div>
                  <button type='submit' className='bg-[#212121] rounded-full px-5 py-2 flex items-center gap-2 cursor-pointer'>
                    <ArrowRight className='size-5 text-[#F6F5FA]' />
                  </button>
                </section>
                
        </div>
    );
}

export default HomeSearch;