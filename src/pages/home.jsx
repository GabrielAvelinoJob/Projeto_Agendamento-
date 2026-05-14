import ServiceCard from '../components/servicecard'
import { services } from '../data/services'

function Home() {
  return (
    <div className="min-h-screen 
    #09090b
    text-white p-10">
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