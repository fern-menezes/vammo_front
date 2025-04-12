import { Bell, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar(){

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <nav className="grid grid-cols-2 ml-20 px-8 py-5">
            <div className="flex items-center justify-between bg-black/5 rounded-full px-6">
                <input type="text" placeholder="Busca.."/>
                <MagnifyingGlass size={20} className="cursor-pointer"/>
            </div>

            <div className="flex lg:gap-5 sm:gap-3 items-center justify-end">
                    <Link to='/notifications'>
                        <Bell size={20}/>
                    </Link>

                    <Link to='/profile'>
                        <img src="https://i.pinimg.com/736x/0c/3a/f2/0c3af270bb0ae87309d68f6a9011b9f0.jpg" alt="" className="rounded-full w-15"/>
                    </Link>

                    <Link to='/login' onClick={logout} className="flex items-center">
                        <SignOut size={20}/>
                        Sair
                    </Link>
                
                
                
            </div>
          
        </nav>
      );
}