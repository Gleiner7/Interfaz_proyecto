import { useEffect, useState } from 'react'
import { CheckCircle2, Clock3, AlertTriangle, ArrowRight } from 'lucide-react'
import ProgressBar from '../shared/ProgressBar'

interface Props {
  userName: string
}

const InstructorDashboard = ({ userName }: Props) => {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date()
    target.setDate(target.getDate() + 5)
    target.setHours(17, 0, 0, 0)

    const update = () => {
      const now = new Date()
      const diff = Math.max(0, target.getTime() - now.getTime())
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setRemaining({ days, hours, minutes, seconds })
    }

    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-[1fr_260px]">
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-green-300">Hola, {userName}</p>
              <h1 className="mt-2 text-2xl font-bold">Tu espacio</h1>
              <p className="mt-1 text-gray-400">Revisa informes y sigue tu trabajo.</p>
            </div>
            <span className="rounded-2xl bg-green-700/20 px-3 py-1 text-sm text-green-200">Actualizado</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-green-900/30 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Cumplimiento</p>
              <p className="mt-2 text-2xl font-bold">92%</p>
              <ProgressBar value={92} />
            </div>
            <div className="rounded-2xl border border-green-900/30 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Puntualidad</p>
              <p className="mt-2 text-2xl font-bold">87%</p>
              <ProgressBar value={87} />
            </div>
            <div className="rounded-2xl border border-green-900/30 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Revisión</p>
              <p className="mt-2 text-2xl font-bold">28h</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <p className="text-sm text-green-300">Entrega pendiente</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-center">
            {['Días', 'Horas', 'Minutos', 'Segundos'].map((label, index) => {
              const value = [remaining.days, remaining.hours, remaining.minutes, remaining.seconds][index]
              return (
                <div key={label} className="rounded-2xl bg-[#111827] p-4">
                  <p className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</p>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-300" />
            <h2 className="font-semibold">Pendientes</h2>
          </div>
          <p className="mt-2 text-gray-400">Revisa lo que falta por entregar.</p>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-300" />
            <h2 className="font-semibold">Ajustes</h2>
          </div>
          <p className="mt-2 text-gray-400">Un informe necesita cambios.</p>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2">
            <Clock3 className="h-5 w-5 text-emerald-300" />
            <h2 className="font-semibold">Tiempo</h2>
          </div>
          <p className="mt-2 text-gray-400">Mantén el ritmo sin apuros.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {['Nuevo Informe', 'Historial', 'Alertas'].map((item) => (
          <div key={item} className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
            <p className="text-sm text-green-300">Acceso rápido</p>
            <h3 className="mt-3 text-lg font-semibold">{item}</h3>
            <p className="mt-2 text-gray-400">Entra aquí para continuar.</p>
            <div className="mt-3 flex justify-end text-green-400">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstructorDashboard
