import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Home from './pages/home'
import Schedule from './pages/schedule'
import Success from './pages/sucesso'
import LoginAdmin from './pages/LoginAdmin'
import Dashboard from './pages/Dashboard'
import Agendamentos from './pages/Agendamentos'

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

      <Route path="/agendamentos" element={<Agendamentos/>} />
</Routes>

    </BrowserRouter>
  )
}

export default App