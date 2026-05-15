import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'
import { useState } from 'react'

function Schedule() {
  const navigate = useNavigate()
  const [selectedTime, setSelectedTime] = useState('')


  const times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
  ]

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white px-6 py-24">

      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-6 md:left-6"
      >
        <img
          src={btvoltar}
          alt="Voltar"
          className="w-24 md:w-20 rounded-2xl hover:scale-105 transition"
        />

      </button>

      <h1 className="text-4xl font-bold text-center">
        Agendamento
      </h1>

      <div className="max-w-xl mx-auto mt-12">
        <div>
          <label className="block mb-2">
            Nome
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full p-4 rounded-xl bg-zinc-800 outline-none"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2">
            Telefone
          </label>

          <input
            type="text"
            placeholder="(31) 99999-9999"
            className="w-full p-4 rounded-xl bg-zinc-800 outline-none"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Escolha um horário
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`
    p-4
    rounded-xl
    font-semibold
    transition

    ${selectedTime === time
                    ? 'bg-yellow-500 text-black'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }
  `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button 
         onClick={() => navigate('/sucesso')}
        className="w-full mt-10 bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition">
          Confirmar Agendamento
        </button>
      </div>
    </div>
  )
}

export default Schedule