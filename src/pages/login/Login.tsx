import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { ChangeEvent, JSX, useContext, useEffect, useState } from "react";
import { auth, provider } from "../../components/firebase/Firebase";
import { AuthContext } from "../../components/context/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

export default function Login(): JSX.Element {

  const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/dashboard')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }


    const handleGoogleLogin = async (): Promise<void> => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Usuário logado:", user);
        // Aqui você pode salvar o usuário ou redirecionar
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.error("Erro ao autenticar com Google:", error);
      }
    };

   
    
  return (
    <>
      {/* Estrutura da tela em duas colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Formulário centralizado */}
        <form className="flex justify-center items-center flex-col w-3/5 gap-2 mx-auto" onSubmit={login}>
          {/* Logo centralizada */}
          <img
            src="https://ik.imagekit.io/grupo03/Vammo/vammoblack.png?updatedAt=1741184618721"
            alt="Logo Vammo"
            className="w-30 mb-4"
          />

          <h2 className="text-2xl font-bold">Entrar</h2>
          <p>Entre com seu email e senha</p>

          {/* Campo de Usuário */}
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="email@email.com"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Campo de Senha */}
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border border-[var(--black)]/40 rounded-full p-2 mb-2 text-sm"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="rounded-full text-[var(--white)] bg-[var(--purple)] hover:bg-[var(--black)] w-full py-2 cursor-pointer text-center"
          >
            {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
          </button>

          {/* Seção de "Lembre-se de mim" e "Esqueceu a senha" */}
          <section className="flex flex-col justify-between sm:flex-row sm:gap-20 w-full mt-4">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <input type="checkbox" id="rememberme" />
              <label htmlFor="rememberme">Lembre-se de mim</label>
            </div>
            <div className="text-center sm:text-left">
              <Link to="/forgot-password" className="text-[var(--purple)]">
                Esqueceu a senha?
              </Link>
            </div>
          </section>


          {/* Botão Entrar */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="rounded-full py-2 px-4 w-full flex flex-col items-center"
        >
            Ou entre com
          <img
          src="https://ik.imagekit.io/grupo03/Vammo/google-sigh-up%20(1).png?updatedAt=1741185816536"
          alt="Google Login"
          className="w-10 cursor-pointer "
          onClick={handleGoogleLogin}
        />
        </button>

          {/* Link para Cadastro */}
          <p className="mt-4">
            Ainda não tem uma conta?{" "}
            <Link to="/signup" className="text-[var(--purple)]">
              Cadastre-se
            </Link>
          </p>
        </form>

        {/* Imagem de fundo para login */}
        <div className="fundoLogin hidden lg:block h-full w-full"></div>
      </div>
    </>
  );
}