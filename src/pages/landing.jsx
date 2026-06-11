import { Link } from 'react-router-dom'
import fundo from '../assets/fundo-gravix.png'

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Imagem de fundo */}
      <img
        src={fundo}
        alt=""
        className="
          absolute
          inset-100%
          w-full
          h-full
          object-cover
  bg-black/75
        "
      />

      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Conteúdo */}
      <div
        className="
        relative
        z-10
        min-h-screen
        text-white
        flex
        items-center
        justify-start
        p-8
        "
      >

        <Link
          to="/admin"
          className="
          absolute
          top-6
          right-6
          hover:bg-yellow-400
          transition
          bg-yellow-500
          text-black
          py-1
          px-5
          rounded-2xl
          "
        >
          ⚙ Admin
        </Link>

       <div className="text-left max-w-2xl ml-20 md:ml-32">

         
         <h1 className="text-5xl md:text-6xl font-bold">
            Bem-vindo ao GRAVIX
          </h1>

          <p className="text-lg text-zinc-300 mt-6">
            Sua experiência de agendamento começa aqui.
          </p>

          <Link to="/servicos">
            <button
              className="
              mt-10
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              py-4
              px-10
              rounded-2xl
              transition
              text-lg
              font-semibold
              "
            >
              Agendar Agora
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Landing