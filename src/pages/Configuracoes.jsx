import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'
import { useState } from 'react'


function Configuracoes() {

  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState('')

  return (

    <div className="relative min-h-screen bg-[#09090b] text-white px-4 md:px-8 pt-24">

      <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 md:top-6 md:left-6"  >

                <img
                    src={btvoltar}
                    alt="Voltar"
                    className="w-20 sm:w-24 rounded-2xl hover:scale-105 transition"
                /> </button>


      {/* Cabeçalho */}

      <div>

        <h1 className="text-4xl font-bold">
          Configurações
        </h1>

        <p className="text-zinc-400 mt-2">
          Gerencie as configurações do sistema
        </p>

      </div>


      {/* Dados empresa */}

      <div className="
      bg-zinc-900
      rounded-2xl
      p-6
      mt-10
      ">

        <h2 className="text-2xl font-bold mb-6">
          Perfil
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label>
              Nome
            </label>

            <input
              type="text"
              defaultValue="GRAVIX"
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


          <div>

            <label>
              Telefone
            </label>

            <input
              type="text"
              defaultValue="(31)99999-9999"
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

        </div>

      </div>


      {/* Horários */}

      <div className="
      bg-zinc-900
      rounded-2xl
      p-6
      mt-8
      ">

        <h2 className="text-2xl font-bold mb-6">
          Horário de funcionamento
        </h2>


        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label>
              Abertura
            </label>

            <input
              type="time"
              defaultValue="09:00"
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


          <div>

            <label>
              Fechamento
            </label>

            <input
              type="time"
              defaultValue="18:00"
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

        </div>

      </div>


      {/* Segurança */}

      <div className="
      bg-zinc-900
      rounded-2xl
      p-6
      mt-8
      ">

        <h2 className="text-2xl font-bold mb-6">
          Segurança
        </h2>

        <input
          type="password"
          placeholder="Nova senha"
          className="
          w-full
          p-4
          rounded-xl
          bg-zinc-800
          outline-none
          "
        />

      </div>


      {/* Botão */}

      <div className="flex flex-col items-center mt-10">

  {mensagem && (

    <p className="
    text-green-400
    mb-4
    font-semibold
    ">
      {mensagem}
    </p>

  )}

  <button

    onClick={() => {

      setMensagem('Alterações salvas com sucesso ✅')

      setTimeout(() => {
        setMensagem('')
      },2000)

    }}

   className="
w-full
sm:w-auto
bg-yellow-500
hover:bg-yellow-400
text-black
font-bold
py-3
px-8
rounded-xl
transition
"
  >
    Salvar alterações
  </button>

</div>

    </div>

  )

}

export default Configuracoes