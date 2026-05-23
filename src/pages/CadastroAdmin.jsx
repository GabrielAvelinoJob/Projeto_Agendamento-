import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import btvoltar from '../assets/voltar.png'

function CadastroAdmin() {

    const navigate = useNavigate()

    const [mensagem, setMensagem] = useState('')

    function handleCadastro() {

        setMensagem('Administrador cadastrado com sucesso ✅')

        setTimeout(() => {

            navigate('/admin')

        }, 2000)

    }

    return (

        <div className="relative min-h-screen bg-[#09090b] text-white flex items-center justify-center px-6">

            {/* voltar */}

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


            <div className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-10
w-full
max-w-md
">

                <h1 className="text-4xl font-bold text-center">
                    Cadastre-se
                </h1>

                <p className="text-zinc-400 text-center mt-2">
                    Crie sua conta administrativa
                </p>


                <div className="mt-8">

                    <input
                        type="text"
                        placeholder="Nome"
                        className="
w-full
p-4
rounded-xl
bg-zinc-800
outline-none
mb-4
"
                    />

                    <input
                        type="text"
                        placeholder="Usuário"
                        className="
w-full
p-4
rounded-xl
bg-zinc-800
outline-none
mb-4
"
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        className="
w-full
p-4
rounded-xl
bg-zinc-800
outline-none
mb-4
"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        className="
w-full
p-4
rounded-xl
bg-zinc-800
outline-none
mb-4
"
                    />

                    <input
                        type="password"
                        placeholder="Confirmar senha"
                        className="
w-full
p-4
rounded-xl
bg-zinc-800
outline-none
"
                    />

                </div>

                {mensagem && (

                    <p className="
text-green-400
text-center
mt-6
font-semibold
">
                        {mensagem}
                    </p>

                )}

                <button

                    onClick={handleCadastro}

                    className="
w-full
mt-8
bg-yellow-500
hover:bg-yellow-400
text-black
font-bold
py-4
rounded-xl
transition
"
                >

                    Cadastrar

                </button>

            </div>

        </div>

    )

}

export default CadastroAdmin