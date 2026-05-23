import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Home from './pages/home'
import Schedule from './pages/schedule'
import Success from './pages/sucesso'
import LoginAdmin from './pages/LoginAdmin'
import Dashboard from './pages/Dashboard'
import Agendamentos from './pages/Agendamentos'
import Clientes from './pages/Clientes'
import Historico from './pages/Historico'
import Configuracoes from './pages/Configuracoes'
import CadastroAdmin from './pages/CadastroAdmin'
import RecuperarSenha from './pages/RecuperarSenha'
import VerificarCodigo from './pages/Verificarcodigo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/servicos"
          element={<Home />}
        />

        <Route
          path="/agendamento"
          element={<Schedule />}
        />

        <Route path="/sucesso" element={<Success />} />


        <Route path="/admin" element={<LoginAdmin />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/agendamentos" element={<Agendamentos />} />

        <Route path="/clientes" element={<Clientes />} />

        <Route path="/historico" element={<Historico />} />

        <Route path="/configuracoes" element={<Configuracoes />} />

        <Route path="/cadastro-admin" element={<CadastroAdmin />} />

        <Route path="/recuperar-senha" element={<RecuperarSenha />} />

        <Route path="/verificar-codigo" element={<VerificarCodigo />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App