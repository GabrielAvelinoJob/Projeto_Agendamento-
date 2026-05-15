import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center max-w-xl w-full">

        <h1 className="text-5xl font-bold text-yellow-500">
          Agendamento concluído
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Seu horário foi reservado com sucesso.
        </p>

        <Link to="/">
          <button
            className="
            mt-10
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-bold
            py-4
            px-8
            rounded-2xl
            transition
            "
          >
            Voltar ao início
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Success