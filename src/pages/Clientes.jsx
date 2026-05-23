import { useNavigate } from 'react-router-dom'
import btvoltar from '../assets/voltar.png'

function Clientes() {

    const navigate = useNavigate()

    return (



        <div className="min-h-screen bg-[#09090b] text-white p-8">

            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 md:top-6 md:left-6"  >

                <img
                    src={btvoltar}
                    alt="Voltar"
                    className="w-24 md:w-20 rounded-2xl hover:scale-105 transition"
                /> </button>

            {/* Cabeçalho */}

            <div className="flex justify-between items-center">

                <div className="w-full">

                    <h1 className="text-4xl font-bold">
                        Clientes
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Gerencie seus clientes cadastrados
                    </p>

                </div>

            </div>


            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="bg-zinc-900 p-6 rounded-2xl">

                    <h2 className="text-zinc-400">
                        Clientes cadastrados
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        48
                    </p>

                </div>

                <div className="bg-zinc-900 p-6 rounded-2xl">

                    <h2 className="text-zinc-400">
                        Novos clientes
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        12
                    </p>

                </div>

                <div className="bg-zinc-900 p-6 rounded-2xl">

                    <h2 className="text-zinc-400">
                        Retorno mensal
                    </h2>

                    <p className="text-4xl font-bold mt-4">
                        76%
                    </p>

                </div>

            </div>


            {/* Pesquisa */}

            <div className="mt-10">

                <input
                    type="text"
                    placeholder="Pesquisar cliente..."
                    className="
          w-full
          bg-zinc-900
          p-4
          rounded-xl
          outline-none
          "
                />

            </div>


            {/* Tabela */}

            <div className="
      w-full
      bg-zinc-900
      rounded-2xl
      p-6
      mt-10
      overflow-x-auto
      ">

                <table className="w-full table-fixed">

                    <thead className="text-zinc-400">

                        <tr>

                            <th className="text-left pb-4 w-[25%]">
                                Nome
                            </th>

                            <th className="text-left pb-4 w-[30%]">
                                Telefone
                            </th>

                            <th className="text-left pb-4 w-[25%]">
                                Último agendamento
                            </th>

                            <th className="text-left pb-4 w-[20%]">
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
                                (31) 99999-9999
                            </td>

                            <td className="text-left">
                                22/05/2026
                            </td>

                            <td className="flex gap-2 items-center h-16">

                                <button
                                onClick={() => navigate('/historico')}
                                    className="bg-zinc-700 px-3 py-2 rounded-lg hover:bg-zinc-600 transition">
                                    Histórico
                                </button>

                            </td>

                        </tr>



                    </tbody>

                </table>

            </div>

        </div>

    )
}

export default Clientes