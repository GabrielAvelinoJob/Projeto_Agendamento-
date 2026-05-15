import { Link } from 'react-router-dom'
import tesoura from '../assets/tesoura.png'

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">

        <img
          src={tesoura}
          alt="Logo GMA"
          className=" inline-flex items-center justify-center w-25 h-25 rounded-2xl bg-zinc-900 border border-zinc-800"
        />

        <h1 className="text-6xl md:text-7xl tracking-tight">
          GMA
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Agende seu horário com profissionais de excelência
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