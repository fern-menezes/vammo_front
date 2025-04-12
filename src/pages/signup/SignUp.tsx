import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { RotatingLines } from 'react-loader-spinner'
import { cadastrarUsuario } from "../../services/Service";

export default function SignUp() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    tipo_user: '',
    nome: '',
    birthday: '',
    genero: '',
    usuario: '',
    senha: '',
    foto: '',
    avaliacao: 0,
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      {/* Estrutura da tela em duas colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Imagem de fundo (ocupa toda a altura e largura da coluna) */}
        <div className="fundoCadastro hidden lg:block h-full w-full">
        </div>

        {/* Formulário centralizado */}
        <form className="flex justify-center items-center flex-col w-4/5 gap-4 mx-auto" 
        onSubmit={cadastrarNovoUsuario}>
          {/* Logo centralizada */}
          <img
            src="https://ik.imagekit.io/grupo03/Vammo/vammoblack.png?updatedAt=1741184618721"
            alt="Logo Vammo"
            className="w-30"
          />

          <h2 className="text-2xl font-bold">Crie uma conta</h2>
          <p>Adicione algumas informações para sua nova conta</p>

          {/* Campo de Nome */}
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex.: Michael Scott"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value = {usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Campo de Usuário */}
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ex.: michael@email.com"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value = {usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Tipos de Usuário */}
          <div className="flex flex-col w-full">
            <label htmlFor="tipo_user">Tipo de Usuário</label>
            <div className="flex items-center gap-5 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="admin"
                  name="tipo_user"
                  value="admin"
                  className="mr-2"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  checked={usuario.tipo_user === "admin"} // Correspondência com o estado
                />
                <label htmlFor="admin">Admin</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="cliente"
                  name="tipo_user"
                  value="cliente"
                  className="mr-2"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  checked={usuario.tipo_user === "cliente"} // Correspondência com o estado
                />
                <label htmlFor="cliente">Cliente</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="motorista"
                  name="tipo_user"
                  value="motorista"
                  className="mr-2"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  checked={usuario.tipo_user === "motorista"} // Correspondência com o estado
                />
                <label htmlFor="motorista">Motorista</label>
              </div>
            </div>
          </div>

          {/* Data de nascimento */}
          <div className="flex flex-col w-full">
            <label htmlFor="birthday">Data de nascimento</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value = {usuario.birthday}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value = {usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          {/* Confirmar senha */}
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕⁕"
              className="border border-[var(--black)]/40 rounded-full p-2 text-sm"
              value = {confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>

          {/* Botão e link para login */}
          <div className="flex justify-center w-full mt-4">
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
                    <span>Cadastrar</span>
                  }
            </button>
          </div>
          <p className="text-center mt-4 mb-4">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-[var(--purple)]">
              Entre
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
