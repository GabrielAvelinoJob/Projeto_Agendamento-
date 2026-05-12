import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/landing'
import Home from './pages/home'
import Schedule from './pages/schedule'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App