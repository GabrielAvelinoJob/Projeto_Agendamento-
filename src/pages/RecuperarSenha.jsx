import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import btvoltar from '../assets/voltar.png'

function RecuperarSenha() {

    const navigate = useNavigate()
    const [mensagem, setMensagem] = useState('')

    function enviarCodigo() {

        setMensagem('Código enviado com sucesso ✅')

        setTimeout(() => {

            navigate('/verificar-codigo')

        }, 2000)

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
                    Recuperar senha
                </h1>

                <p className="
        text-zinc-400
        text-center
        mt-3
        ">
                    Informe seu e-mail para receber o código
                </p>


                <div className="mt-8">

                    <label>
                        E-mail
                    </label>

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
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

                    onClick={enviarCodigo}

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

                    Enviar código

                </button>

            </div>

        </div>

    )

}

export default RecuperarSenha