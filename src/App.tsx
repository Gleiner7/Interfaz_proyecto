import { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage'
import InstructorView from './components/InstructorView'
import CoordinadorView from './components/CoordinadorView'
import Toast from './components/shared/Toast'
import type { RolType } from './data/mockData'

const getNombreUsuario = (email: string) => {
  if (email.includes('instructor') || email.includes('docente')) {
    return 'María Fernanda'
  }
  if (email.includes('coordinador') || email.includes('admin')) {
    return 'Javier Andrés'
  }
  return 'Usuario'
}

function App() {
  const [rol, setRol] = useState<RolType | null>(null)
  const [activePage, setActivePage] = useState('Dashboard')
  const [userName, setUserName] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(null), 3000)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const handleLogin = (email: string, password: string) => {
    if (password.trim() !== '1234') {
      setLoginError('Contraseña incorrecta. Intenta de nuevo.')
      return
    }

    const normalized = email.toLowerCase()
    if (normalized.includes('instructor') || normalized.includes('docente')) {
      setRol('instructor')
      setUserName(getNombreUsuario(normalized))
      setActivePage('Dashboard')
      setLoginError('')
      setToast('Bienvenido al Portal Instructor')
      return
    }

    if (normalized.includes('coordinador') || normalized.includes('admin')) {
      setRol('coordinador')
      setUserName(getNombreUsuario(normalized))
      setActivePage('Dashboard')
      setLoginError('')
      setToast('Bienvenido al Portal Coordinación')
      return
    }

    setLoginError('Correo no reconocido. Usa una cuenta institucional válida.')
  }

  const handleLogout = () => {
    setRol(null)
    setActivePage('Dashboard')
    setUserName('')
    setToast('Sesión cerrada con éxito')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {rol === null ? (
        <LoginPage onLogin={handleLogin} error={loginError} />
      ) : rol === 'instructor' ? (
        <InstructorView
          userName={userName}
          selectedPage={activePage}
          onChangePage={setActivePage}
          onLogout={handleLogout}
        />
      ) : (
        <CoordinadorView
          userName={userName}
          selectedPage={activePage}
          onChangePage={setActivePage}
          onLogout={handleLogout}
        />
      )}
      <Toast message={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default App
