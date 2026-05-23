import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'

function Historico() {

  const navigate = useNavigate()

  return (

    <div className="relative min-h-screen bg-[#09090b] text-white px-8 pt-24">

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


      {/* Cabeçalho */}

      <div>

        <h1 className="text-4xl font-bold">
          Histórico do Cliente
        </h1>

        <p className="text-zinc-400 mt-2">
          Histórico completo de atendimentos
        </p>

      </div>


      {/* Card Cliente */}

      <div className="
      bg-zinc-900
      p-6
      rounded-2xl
      mt-10
      ">

        <h2 className="text-2xl font-bold">
          Gabriel
        </h2>

        <p className="text-zinc-400 mt-2">
          (31) 99999-9999
        </p>

      </div>


      {/* Histórico */}

      <div className="
      bg-zinc-900
      rounded-2xl
      p-6
      mt-8
      ">

        <h2 className="text-2xl font-bold mb-6">
          Últimos atendimentos
        </h2>


        <div className="
        border-b
        border-zinc-800
        py-4
        ">

          <p className="font-semibold">
            Corte
          </p>

          <p className="text-zinc-400">
            22/05/2026 - 14:00
          </p>

        </div>


        <div className="
        border-b
        border-zinc-800
        py-4
        ">

          <p className="font-semibold">
            Corte + Barba
          </p>

          <p className="text-zinc-400">
            15/05/2026 - 15:00
          </p>

        </div>


        <div className="
        py-4
        ">

          <p className="font-semibold">
            Barba
          </p>

          <p className="text-zinc-400">
            08/05/2026 - 16:00
          </p>

        </div>

      </div>

    </div>

  )
}

export default Historico