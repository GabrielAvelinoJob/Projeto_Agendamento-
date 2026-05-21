import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'

function Agendamentos() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8">

      {/* Cabeçalho */}
      <div className="flex justify-between items-center">

        <div className="w-full">

  <h1 className="text-4xl font-bold">
    Agendamentos
  </h1>

  <p className="text-zinc-400 mt-2">
    Gerencie todos os agendamentos
  </p>

</div>

         <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:top-6 md:left-6"  >

        <img
          src={btvoltar}
          alt="Voltar"
          className="w-24 md:w-20 rounded-2xl hover:scale-105 transition"
        /> </button>

      </div>

      {/* Filtros */}

      <div className="grid md:grid-cols-3 gap-4 mt-10">

        <input
          type="text"
          placeholder="Pesquisar cliente..."
          className="
          bg-zinc-900
          p-4
          rounded-xl
          outline-none
          "
        />

        <input
          type="date"
          className="
          bg-zinc-900
          p-4
          rounded-xl
          outline-none
          "
        />

        <select
          className="
          bg-zinc-900
          p-4
          rounded-xl
          outline-none
          "
        >
          <option>
            Todos
          </option>

          <option>
            Confirmado
          </option>

          <option>
            Pendente
          </option>

          <option>
            Concluído
          </option>

        </select>

      </div>


      {/* Tabela */}

      <div className="w-full bg-zinc-900 rounded-2xl p-6 mt-10 overflow-x-auto">

  <table className="w-full table-fixed">

    <thead className="text-zinc-400">

      <tr>

        <th className="text-left pb-4 w-[20%]">
          Cliente
        </th>

        <th className="text-left pb-4 w-[20%]">
          Serviço
        </th>

        <th className="text-left pb-4 w-[15%]">
          Horário
        </th>

        <th className="text-left pb-4 w-[20%]">
          Status
        </th>

        <th className="text-left pb-4 w-[25%]">
          Ações
        </th>

      </tr>

    </thead>

    <tbody>

      <tr className="border-t border-zinc-800 h-16">

        <td className="text-left">
          Gabriel
        </td>

        <td className="text-left">
          Corte
        </td>

        <td className="text-left">
          14:00
        </td>

        <td className="text-green-400 text-left">
          Confirmado
        </td>

        <td className="flex gap-2 items-center h-16">

          <button
            className="
            bg-yellow-500
            text-black
            px-3
            py-2
            rounded-lg
            hover:bg-yellow-400
            transition
            "
          >
            Editar
          </button>

          <button
            className="
            bg-red-500
            px-3
            py-2
            rounded-lg
            hover:bg-red-400
            transition
            "
          >
            Cancelar
          </button>

        </td>

      </tr>

    </tbody>

  </table>

</div>

    </div>
  )
}

export default Agendamentos