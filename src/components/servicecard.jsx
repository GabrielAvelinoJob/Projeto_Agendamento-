import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-2xl w-72 shadow-lg">
      <h2 className="text-2xl font-bold">
        {service.name}
      </h2>

      <p className="text-zinc-400 mt-2">
        {service.duration}
      </p>

      <p className="text-yellow-500 text-xl mt-4 font-semibold">
        {service.price}
      </p>

     <Link to="/agendamento">
  <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition">
    Agendar
  </button>
</Link>
    </div>
  )
}

export default ServiceCard