import ServiceCard from '../components/servicecard'
import { services } from '../data/services'
import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'

function Home() {

  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white px-6 py-24">

      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-6 md:left-6"  >

        <img
          src={btvoltar}
          alt="Voltar"
          className="w-24 md:w-20 rounded-2xl hover:scale-105 transition"
        />


      </button>

      <header className="text-center">
        <h1 className="text-5xl font-bold">
          Nossos serviços
        </h1>

        <p className="text-zinc-400 mt-4">
          Escolha o serviço ideal para você
        </p>
      </header>

      <section className="mt-16 flex flex-wrap gap-8 justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </section>
    </div>
  )
}

export default Home