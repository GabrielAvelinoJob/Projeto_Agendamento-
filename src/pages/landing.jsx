import { Link } from 'react-router-dom'
import tesoura from '../assets/tesoura.png'

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">

      <Link
        to="/admin"
        className="
        absolute
        top-6
        right-6
        hover:bg-yellow-400
        transition
        bg-yellow-500  text-black  py-1 px-5 rounded-2xl
        "
      >
        ⚙ Admin
      </Link>
      
      <div className="text-center max-w-2xl">

        <img
          src={tesoura}
          alt="Logo GMA"
          className=" inline-flex items-center justify-center w-25 h-25 rounded-2xl bg-zinc-900 border border-zinc-800"
        />

        <h1 className="text-6xl md:text-7xl tracking-tight">
          Bem-vindo ao GRAVIX
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Sua experiência de agendamento começa aqui.
        </p>

        <Link to="/servicos">
          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black  py-4 px-10 rounded-2xl transition text-lg">
            Agendar Agora
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing