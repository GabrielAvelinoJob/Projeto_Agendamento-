import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <div
      className="
      w-[380px]
      bg-zinc-900
      border border-zinc-800
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:border-yellow-500/30
      hover:shadow-[0_0_30px_rgba(255,170,0,0.10)]
      hover:-translate-y-1
      "
    >

      <h2 className="text-3xl font-bold">
        {service.name}
      </h2>

      <p className="text-zinc-400 mt-5 leading-8 text-lg">
        {service.description}
      </p>

      <div className="border-t border-zinc-800 my-8"></div>

      <div className="flex items-center justify-between">

        <span className="text-yellow-500 text-4xl font-bold">
          {service.price}
        </span>

        <Link to="/agendamento">
          <button
            className="
    bg-black
    px-6
    py-3
    rounded-2xl
    font-semibold
    transition
    hover:bg-yellow-500
    "
          >
            Selecionar
          </button>
        </Link>

      </div>

    </div>
  )
}

export default ServiceCard