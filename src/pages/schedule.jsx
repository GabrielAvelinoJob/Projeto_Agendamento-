function Schedule() {
  const times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
  ]

  return (
    <div className="min-h-screen #09090b text-white p-10">
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
                className="bg-zinc-800 p-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full mt-10 bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition">
          Confirmar Agendamento
        </button>
      </div>
    </div>
  )
}

export default Schedule