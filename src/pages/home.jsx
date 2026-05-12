import ServiceCard from '../components/servicecard'
import { services } from '../data/services'

function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      <header className="text-center">
        <h1 className="text-5xl font-bold">
          Gestão de agendamento GMA
        </h1>

        <p className="text-zinc-400 mt-4">
          Escolha um serviço
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