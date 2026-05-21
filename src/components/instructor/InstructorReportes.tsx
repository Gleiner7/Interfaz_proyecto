import { Download, Eye, Edit3 } from 'lucide-react'
import { mockInformes } from '../../data/mockData'
import StatusBadge from '../shared/StatusBadge'

const InstructorReportes = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Mis Reportes</h1>
            <p className="mt-2 text-gray-400">Revisa los informes enviados y su estado actual.</p>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {mockInformes.map((informe) => (
          <div key={informe.id} className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-gray-400">{informe.mes}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Informe mensual</h2>
              </div>
              <StatusBadge status={informe.estado} />
            </div>
            <div className="mt-5 space-y-3 text-sm text-gray-400">
              <p>
                <span className="text-white">Fecha de registro:</span> {informe.fecha}
              </p>
              <p>
                <span className="text-white">Observaciones:</span> {informe.observaciones}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-green-900/50 bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
                <Eye className="h-4 w-4" /> Ver
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-green-900/50 bg-slate-900 px-4 py-2 text-sm text-gray-200 hover:bg-slate-800">
                <Download className="h-4 w-4" /> Descargar
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-green-900/50 bg-slate-900 px-4 py-2 text-sm text-gray-200 hover:bg-slate-800">
                <Edit3 className="h-4 w-4" /> Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstructorReportes
