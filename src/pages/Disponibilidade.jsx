import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import btvoltar from '../assets/voltar.png'

function Disponibilidade() {

  const navigate = useNavigate()

  const [diaSelecionado, setDiaSelecionado] = useState('Segunda')

  const [horariosSelecionados, setHorariosSelecionados] = useState([])

  const [mensagem, setMensagem] = useState('')

  const dias = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]

  const horarios = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ]

  function selecionarHorario(horario) {

    if (horariosSelecionados.includes(horario)) {

      setHorariosSelecionados(
        horariosSelecionados.filter(
          h => h !== horario
        )
      )

    } else {

      setHorariosSelecionados([
        ...horariosSelecionados,
        horario
      ])

    }

  }

  function salvarDisponibilidade() {

    setMensagem(
      'Disponibilidade salva com sucesso ✅'
    )

    setTimeout(() => {

      setMensagem('')

    }, 3000)

  }

  return (

    <div className="
    relative
    min-h-screen
    bg-[#09090b]
    text-white
    px-6
    py-24
    ">

      <button
        onClick={() => navigate(-1)}
        className="
        absolute
        top-4
        left-4
        md:top-6
        md:left-6
        "
      >

        <img
          src={btvoltar}
          alt="Voltar"
          className="
          w-24
          md:w-20
          rounded-2xl
          hover:scale-105
          transition
          "
        />

      </button>

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Disponibilidade
        </h1>

        <p className="text-zinc-400 mt-2">
          Defina os horários disponíveis para atendimento
        </p>

       {/* Dias */}

<div
  className="
  grid
  grid-cols-2
  md:grid-cols-6
  gap-4
  mt-10
  mb-16
  "
>

  {dias.map((dia) => (

    <button
      key={dia}
      onClick={() => setDiaSelecionado(dia)}
      className={`
        p-4
        rounded-xl
        transition
        font-semibold

        ${
          diaSelecionado === dia
            ? 'bg-yellow-500 text-black'
            : 'bg-zinc-800 hover:bg-zinc-700'
        }
      `}
    >
      {dia}
    </button>

  ))}

</div>

{/* Título */}

<h2
  className="
  text-2xl
  font-semibold
  "
>
  Horários disponíveis
</h2>

{/* Horários */}

<div
  className="
  grid
  grid-cols-2
  md:grid-cols-4
  gap-4
  mt-8
  "
>

  {horarios.map((horario) => (

    <button
      key={horario}
      onClick={() => selecionarHorario(horario)}
      className={`
        p-4
        rounded-xl
        font-semibold
        transition

        ${
          horariosSelecionados.includes(horario)
            ? 'bg-yellow-500 text-black'
            : 'bg-zinc-800 hover:bg-zinc-700'
        }
      `}
    >
      {horario}
    </button>

  ))}

</div>

        {mensagem && (

          <p className="
          text-green-400
          mt-8
          font-semibold
          ">
            {mensagem}
          </p>

        )}

        <button
          onClick={salvarDisponibilidade}
          className="
          mt-8
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-bold
          py-4
          px-8
          rounded-xl
          transition
          "
        >
          Salvar 
        </button>

      </div>

    </div>

  )

}

export default Disponibilidade