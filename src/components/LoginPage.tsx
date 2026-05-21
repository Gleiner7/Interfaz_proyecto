import { useState } from 'react'
import { Mail, Lock, ShieldCheck, Activity, FileSpreadsheet, Eye, EyeOff } from 'lucide-react'

interface LoginPageProps {
  onLogin: (email: string, password: string) => void
  error: string
}

const LoginPage = ({ onLogin, error }: LoginPageProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <section className="lg:w-1/2 p-8 bg-green-800 text-white flex flex-col justify-between gap-6">
        <div className="space-y-5">
          <div className="rounded-3xl bg-green-900/80 p-6">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-green-600 text-white">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="mt-5 text-4xl font-bold">SITMI</h1>
            <p className="mt-2 text-green-100">Tecnoparque SENA Surcolombiano</p>
            <p className="mt-4 text-sm text-green-100/80">
              Plataforma para llevar control simple de tus informes.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-2xl bg-green-900/80 p-3 text-sm">
              <ShieldCheck className="text-green-200" />
              <span>Seguro</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-green-900/80 p-3 text-sm">
              <Activity className="text-green-200" />
              <span>Simple</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-green-900/80 p-3 text-sm">
              <FileSpreadsheet className="text-green-200" />
              <span>Ordenado</span>
            </div>
          </div>
        </div>
        <div className="text-sm text-green-100/80">Usa tu cuenta institucional para entrar.</div>
      </section>

      <section className="lg:w-1/2 p-8 bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Bienvenido</h2>
            <p className="text-gray-400 mt-1">Inicia sesión con tu correo SENA.</p>
          </div>

          {error ? (
            <div className="rounded-2xl bg-red-900 border border-red-700 p-4 text-red-100">{error}</div>
          ) : null}

          <div className="space-y-4">
            <label className="block text-sm text-gray-300">
              Correo institucional
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-green-900/50 bg-gray-800 px-4 py-3">
                <Mail className="text-green-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@sena.edu.co"
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                />
              </div>
            </label>

            <label className="block text-sm text-gray-300">
              Contraseña
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-green-900/50 bg-gray-800 px-4 py-3">
                <Lock className="text-green-300" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
                />
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-green-300">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between text-sm text-green-400">
              <button type="button" className="hover:text-green-200">¿Olvidaste tu contraseña?</button>
            </div>

            <button
              type="button"
              onClick={() => onLogin(email, password)}
              className="w-full rounded-2xl bg-green-700 px-4 py-3 text-base font-semibold text-white hover:bg-green-600"
            >
              Ingresar
            </button>

            <p className="text-center text-sm text-gray-500">¿No tienes acceso? Contacta administración</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
