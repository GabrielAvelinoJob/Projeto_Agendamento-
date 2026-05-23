import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'
import { useState } from 'react'

function Agendamentos() {
  const navigate = useNavigate()
  const [abrirEdicao, setAbrirEdicao] = useState(false)
  const [mensagem, setMensagem] = useState('')

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

          {abrirEdicao && (

            <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

              <div className=" bg-zinc-900 p-8 rounded-2xl w-[450px] border border-zinc-800">

                <h2 className="text-2xl font-bold">
                  Editar agendamento
                </h2>

                <div className="mt-6">

                  <label>Cliente</label>

                  <input
                    type="text"
                    defaultValue="Gabriel"
                    className=" w-full mt-2 p-4 bg-zinc-800 rounded-xl outline-none" /></div>

                <div className="mt-4">

                  <label>Serviço</label>

                  <input
                    type="text"
                    defaultValue="Corte"
                    className=" w-full mt-2 p-4 bg-zinc-800 rounded-xl outline-none" /> </div>

                <div className="mt-4">

                  <label>Horário</label>

                  <input
                    type="text"
                    defaultValue="14:00"
                    className=" w-full mt-2 p-4 bg-zinc-800 rounded-xl outline-none " /> </div>
                {mensagem && (

                  <p className=" text-green-400 text-center mt-6 font-semibold ">
                    {mensagem}
                  </p>

                )}
                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => setAbrirEdicao(false)}
                    className=" flex-1 bg-red-500 py-3 rounded-xl">
                    Cancelar
                  </button>

                  <button
                    onClick={() => {

                      setMensagem('Agendamento salvo com sucesso ✅')

                      setTimeout(() => {
                        setAbrirEdicao(false)
                        setMensagem('')
                      }, 2000)

                    }}

                    className=" flex-1 bg-yellow-500 text-black py-3 rounded-xl hover:bg-yellow-400 transition ">
                    Salvar
                  </button>

                </div>

              </div>

            </div>

          )}

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
                  onClick={() => setAbrirEdicao(true)}
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