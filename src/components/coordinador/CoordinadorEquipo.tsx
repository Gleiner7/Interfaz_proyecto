import { Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { mockInstructores } from '../../data/mockData'

const CoordinadorEquipo = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-green-300">
            <Users className="h-5 w-5" />
            <span className="text-sm uppercase tracking-[0.2em]">Equipo</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold">Instructores a cargo</h1>
          <p className="mt-2 text-gray-400">Monitorea el rendimiento individual y las acciones del equipo.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mockInstructores.map((instructor) => (
          <div key={instructor.id} className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 hover:bg-gray-900 transition">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-green-700 text-white text-lg font-bold">{instructor.nombre.split(' ').map((n) => n[0]).join('')}</div>
              <div>
                <h2 className="text-xl font-semibold text-white">{instructor.nombre}</h2>
                <p className="text-sm text-gray-400">{instructor.sede}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <p>Ciudad: {instructor.ciudad}</p>
              <p>Progreso: 84%</p>
              <p>Alertas: 2</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-800">Ver perfil</button>
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Resumen rápido</h2>
            <p className="mt-2 text-gray-400">Tres instructores con seguimiento activo esta semana.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">
            <ArrowRight className="h-4 w-4" /> Más detalles
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoordinadorEquipo
