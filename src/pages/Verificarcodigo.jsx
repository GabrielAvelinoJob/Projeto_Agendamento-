import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import btvoltar from '../assets/voltar.png'

function VerificarCodigo() {

  const navigate = useNavigate()

  const [mensagem, setMensagem] = useState('')

  function alterarSenha() {

    setMensagem('Senha alterada com sucesso ✅')

    setTimeout(() => {

      navigate('/admin')

    },2000)

  }

  return (

    <div className="
    relative
    min-h-screen
    bg-[#09090b]
    text-white
    flex
    items-center
    justify-center
    px-6
    ">

      {/* Botão voltar */}

      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-6 md:left-6"
      >

        <img
          src={btvoltar}
          alt="Voltar"
          className="
          w-24
          md:w-20
          rounded-2xl
          hover:scale-105
          transition
          "
        />

      </button>


      {/* Card */}

      <div className="
      w-full
      max-w-md
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-8
      ">

        <h1 className="
        text-4xl
        font-bold
        text-center
        ">
          Verificar código
        </h1>

        <p className="
        text-zinc-400
        text-center
        mt-3
        ">
          Digite o código recebido e defina sua nova senha
        </p>


        <div className="mt-8">

          <label>
            Código
          </label>

          <input
            type="text"
            placeholder="Digite o código"
            className="
            w-full
            mt-2
            p-4
            rounded-xl
            bg-zinc-800
            outline-none
            "
          />

        </div>


        <div className="mt-4">

          <label>
            Nova senha
          </label>

          <input
            type="password"
            placeholder="Digite a nova senha"
            className="
            w-full
            mt-2
            p-4
            rounded-xl
            bg-zinc-800
            outline-none
            "
          />

        </div>


        <div className="mt-4">

          <label>
            Confirmar senha
          </label>

          <input
            type="password"
            placeholder="Confirme a senha"
            className="
            w-full
            mt-2
            p-4
            rounded-xl
            bg-zinc-800
            outline-none
            "
          />

        </div>


        {mensagem && (

          <p className="
          text-green-400
          text-center
          mt-6
          font-semibold
          ">
            {mensagem}
          </p>

        )}


        <button

          onClick={alterarSenha}

          className="
          w-full
          mt-8
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-bold
          py-4
          rounded-xl
          transition
          "
        >

          Alterar senha

        </button>

      </div>

    </div>

  )

}

export default VerificarCodigo