import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#09090b] text-white flex">

            {/* Sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">

                <h1 className="text-3xl font-bold text-yellow-500">
                    GRAVIX
                </h1>

                <p className="text-zinc-500 text-sm mt-1">
                    Painel Admin
                </p>

                <nav className="mt-10 space-y-4">

                    <button className="w-full text-left bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition">
                        📊 Dashboard
                    </button>

                    <button
                        onClick={() => navigate('/agendamentos')}
                        className="w-full text-left hover:bg-zinc-800 p-4 rounded-xl transition">
                        📅 Agendamentos
                    </button>

                    <button
                    onClick={() => navigate('/clientes')}
                    className="w-full text-left hover:bg-zinc-800 p-4 rounded-xl transition">
                        👥 Clientes
                    </button>

                    <button
                    onClick={() => navigate('/configuracoes')}
                    className="w-full text-left hover:bg-zinc-800 p-4 rounded-xl transition">
                        ⚙ Configurações
                    </button>

                </nav>

                <button
                    onClick={() => navigate('/')}
                    className="mt-20 w-full bg-red-500 hover:bg-red-400 py-3 rounded-xl transition"
                >
                    Sair
                </button>

            </aside>

            {/* Conteúdo */}
            <main className="flex-1 p-10">

                <div className="mb-10">
                    <h1 className="text-4xl font-bold">
                        Olá, Gabriel 👋
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Bem-vindo ao painel administrativo
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-zinc-900 p-6 rounded-2xl">
                        <h2 className="text-zinc-400">
                            Agendamentos hoje
                        </h2>

                        <p className="text-4xl font-bold mt-4">
                            12
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-2xl">
                        <h2 className="text-zinc-400">
                            Clientes
                        </h2>

                        <p className="text-4xl font-bold mt-4">
                            48
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-2xl">
                        <h2 className="text-zinc-400">
                            Horários ocupados
                        </h2>

                        <p className="text-4xl font-bold mt-4">
                            7
                        </p>
                    </div>

                </div>

                {/* Tabela */}
                <div className="bg-zinc-900 rounded-2xl p-6 mt-10">



                    <table className="w-full table-fixed">

                        <thead className="text-zinc-400">
                            <tr>
                                <th className="text-left pb-4">Cliente</th>
                                <th className="text-left pb-4">Serviço</th>
                                <th className="text-left pb-4">Horário</th>
                                <th className="text-left pb-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-t border-zinc-800 h-14">

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

                            </tr>

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    )
}

export default Dashboard