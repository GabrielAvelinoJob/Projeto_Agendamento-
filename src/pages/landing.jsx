import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold">
          Gestão de Agendamento GMA
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Organize agendamentos da sua barbearia
          de forma simples, moderna e eficiente.
        </p>

        <Link to="/servicos">
          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-2xl transition text-lg">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing