import { AlertTriangle, BarChart3, ClipboardList, Sparkles } from 'lucide-react'
import { mockInformes } from '../../data/mockData'

interface Props {
  userName: string
}

const CoordinadorDashboard = ({ userName }: Props) => {
  const totalInformes = mockInformes.length
  const enRevision = mockInformes.filter((item) => item.estado === 'revisión').length
  const correcciones = mockInformes.filter((item) => item.estado === 'correcciones').length

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Hola, {userName}</h1>
            <p className="mt-1 text-gray-400">Mira el estado de los informes con un vistazo rápido.</p>
          </div>
          <span className="rounded-2xl bg-green-700/20 px-3 py-1 text-sm text-green-200">Activos</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2 text-green-300">
            <ClipboardList className="h-5 w-5" />
            <p className="text-sm">Total</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{totalInformes}</p>
          <p className="mt-1 text-sm text-gray-400">Informes registrados.</p>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2 text-amber-300">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm">En revisión</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{enRevision}</p>
          <p className="mt-1 text-sm text-gray-400">Revisiones activas.</p>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2 text-orange-300">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm">Correcciones</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{correcciones}</p>
          <p className="mt-1 text-sm text-gray-400">Ajustes pendientes.</p>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <div className="flex items-center gap-2 text-green-300">
            <BarChart3 className="h-5 w-5" />
            <p className="text-sm">Tareas</p>
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{Math.max(2, totalInformes - enRevision)}</p>
          <p className="mt-1 text-sm text-gray-400">Puntos de acción.</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <h2 className="text-lg font-semibold">Resumen rápido</h2>
          <p className="mt-2 text-gray-400">Un vistazo simple a lo más importante.</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-green-900/25 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Plazo de revisión</p>
              <p className="mt-2 text-2xl font-bold text-white">2 días</p>
            </div>
            <div className="rounded-2xl border border-green-900/25 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Alertas nuevas</p>
              <p className="mt-2 text-2xl font-bold text-white">3</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-green-900/30 bg-gray-800 p-5">
          <h2 className="text-lg font-semibold">Indicadores</h2>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-green-900/25 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Aprobación</p>
              <p className="mt-2 text-2xl font-bold text-white">78%</p>
            </div>
            <div className="rounded-2xl border border-green-900/25 bg-[#111827] p-4">
              <p className="text-sm text-gray-400">Tiempo de respuesta</p>
              <p className="mt-2 text-2xl font-bold text-white">30h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoordinadorDashboard
