import { Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import About from "./pages/About"

function App() {
  return (
    <div className='app'>
      <Header />

      <nav className="nav">
        <NavLink to="/" end>Лента</NavLink>
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/settings">Настройки</NavLink>
        <NavLink to="/about">О проекте</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
