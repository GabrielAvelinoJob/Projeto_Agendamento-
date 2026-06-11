import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/datepicker.css'
import btvoltar from '../assets/voltar.png'

registerLocale('pt-BR', ptBR)

function Schedule() {

  const navigate = useNavigate()

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [agendado, setAgendado] = useState(false)

  const times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
  ]

  function handleAgendamento() {

    if (!selectedDate || !selectedTime) {
      alert('Selecione uma data e um horário')
      return
    }

    setAgendado(true)
  }

  if (agendado) {

    return (

      <div className="
      min-h-screen
      bg-[#09090b]
      text-white
      flex
      items-center
      justify-center
      px-6
      ">

        <div className="
        bg-zinc-900
        p-10
        rounded-3xl
        text-center
        max-w-md
        w-full
        ">

          <h1 className="text-4xl font-bold text-green-400">
            Agendamento concluído 
          </h1>

          <p className="text-zinc-400 mt-4">
            Seu horário foi reservado com sucesso.
          </p>

          <button
            onClick={() => navigate('/')}
            className="
            mt-8
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-bold
            py-3
            px-8
            rounded-xl
            transition
            "
          >
            Voltar ao início
          </button>

        </div>

      </div>

    )
  }

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

        {/* Nome */}

        <div>

          <label className="block mb-2">
            Nome
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-800
            outline-none
            "
          />

        </div>

        {/* Telefone */}

        <div className="mt-6">

          <label className="block mb-2">
            Telefone
          </label>

          <input
            type="text"
            placeholder="(31) 99999-9999"
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-800
            outline-none
            "
          />

        </div>

        {/* Data */}

        {/* Data */}

        <div className="mt-8">

          <h2 className="text-2xl font-semibold mb-4">
            Escolha uma data
          </h2>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            locale="pt-BR"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            placeholderText="Selecione uma data"
            className="
    w-full
    p-4
    rounded-xl
    bg-zinc-800
    text-white
    outline-none
    "
          />

        </div>

        {/* Horários */}

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
                    : 'bg-zinc-800 hover:bg-zinc-700'
                  }
                `}
              >
                {time}
              </button>

            ))}

          </div>

        </div>

        {/* Confirmar */}

        <button
          onClick={handleAgendamento}
          className="
          w-full
          mt-10
          bg-yellow-500
          text-black
          font-bold
          py-4
          rounded-xl
          hover:bg-yellow-400
          transition
          "
        >
          Confirmar Agendamento
        </button>

      </div>

    </div>

  )
}

export default Schedule