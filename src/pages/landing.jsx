import { Link } from 'react-router-dom'
import tesoura from '../assets/tesoura.png'

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">

          <img
          src={tesoura}
          alt="Logo GMA"
          className="w-70 mx-auto mt-0  drop-shadow-[0_0_25px_rgba(255,165,0,0.35)]"
        />

        <h1 className="text-1xl font-bold">
          GMA
        </h1>

        <p className="text-zinc-400 mt-6 text-lg">
          Agende seu horário com profissionais de excelência
        </p>

        <Link to="/servicos">
          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-2xl transition text-lg">
            Agendar Agora 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing