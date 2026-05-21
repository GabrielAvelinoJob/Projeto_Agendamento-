import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import btvoltar from '../assets/voltar.png'

function LoginAdmin() {
  const navigate = useNavigate()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    // backend aqui

    if (user === 'admin' && password === '123') {
      navigate('/dashboard')
    } else {
      alert('Usuário ou senha inválidos')
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">

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

      <div
        className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-10
        w-full
        max-w-md
        "
      >
        <h1 className="text-white text-4xl font-bold text-center">
          Administrador 
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Acesso administrativo GRAVIX
        </p>

        <div className="mt-8">

          <label className="text-white">
            Usuário
          </label>

          <input
            type="text"
            placeholder="Digite seu usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="
            w-full
            p-4
            mt-2
            rounded-xl
            bg-zinc-800
            text-white
            outline-none
            "
          />

        </div>

        <div className="mt-6">

          <label className="text-white">
            Senha
          </label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
            w-full
            p-4
            mt-2
            rounded-xl
            bg-zinc-800
            text-white
            outline-none
            "
          />

        </div>

        <button
          onClick={handleLogin}
          className="
          w-full
          mt-10
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          font-bold
          py-4
          rounded-xl
          transition
          "
        >
          Entrar
        </button>

      </div>
    </div>
  )
}

export default LoginAdmin