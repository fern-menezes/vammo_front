import { House, MapTrifold, Car, Gear } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){

    const location = useLocation();

    if (["/dashboard", "/vehicles", "/settings", "/profile", "/rides", "/notifications"].includes(location.pathname)) {

    return(
        <>
        <aside className="flex flex-col bg-[var(--black)] h-full w-20 fixed">
                    <Link to='/dashboard'>
                        <img src="https://ik.imagekit.io/grupo03/Vammo/VAMMO%20(1)%201.png?updatedAt=1741183646285" alt="" className="w-18 py-2"/>
                    </Link>
            
            <section className="flex flex-col items-center justify-between h-screen py-10">
                <div className="flex flex-col gap-3">
                    <Link to='/dashboard'>
                        <House className="text-[var(--white)] size-7"/>
                    </Link>

                    <Link to='/rides'>
                        <MapTrifold className="text-[var(--white)] size-7" />
                    </Link>

                    <Link to='/vehicles'>
                        <Car className="text-[var(--white)] size-7" />
                    </Link>
                    
                    
                </div>
                <Link to='/settings'>
                    <Gear className="text-[var(--white)] size-7"/>
                </Link>
                
                
                
            </section>
        </aside>
        </>
    )
}
}