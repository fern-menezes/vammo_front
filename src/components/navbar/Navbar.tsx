import { Bell, List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar(){

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/login')
    }

    const location = useLocation();

    if (["/dashboard", "/vehicles", "/settings", "/profile", "/rides", "/notifications"].includes(location.pathname)) {

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

                    <Link to="/login" onClick={logout} className="flex items-center">
                        <SignOut size={20}/>
                        Sair
                    </Link>
                
                
                
            </div>
          
        </nav>
      );
    }

      if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") {
        return (
            <div className="navbar flex justify-between items-center w-full pl-4 md:pl-8 lg:pl-12">
            <img id="logo" src="https://ik.imagekit.io/grupo03/Vammo/vammoblack.png?updatedAt=1741184618721" alt="Logo da Vammo!" className="w-25" />

            
            <div className="hidden lg:flex gap-5 justify-end flex-grow items-center pr-12">
            
                <>
                <a href="#service">Serviços</a>
                <Link to="/about" className="hover:scale-110 hover:underline">Sobre nós</Link>
                <Link to="/contact" className="hover:scale-110 hover:underline">Contato</Link>
                <Link to="/login" className="transition-all delay-70 text-center font-semibold hover:underline text-[#212121] logindmtxt">Login</Link> |
                <Link to="/signup" className="block py-2 my-5 bg-[#212121] hover:bg-[#D8F505] hover:text-[#212121] 
                    transition-all delay-70 rounded-full w-21 p-1 text-center text-[#f6f5fa] logindm">Cadastrar</Link>
            </>
        </div>
        </div>
        )
    }
}