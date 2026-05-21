import { Download, FileText, FileSpreadsheet, FileCheck, Video } from 'lucide-react'

const recursos = [
  { nombre: 'Guía institucional', tipo: 'PDF', icono: FileText },
  { nombre: 'Reporte de seguimiento', tipo: 'Excel', icono: FileSpreadsheet },
  { nombre: 'Formato editable', tipo: 'Word', icono: FileCheck },
  { nombre: 'Capacitación en línea', tipo: 'Video', icono: Video }
]

const InstructorRecursos = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <h1 className="text-3xl font-bold">Recursos</h1>
        <p className="mt-2 text-gray-400">Descarga plantillas y materiales para tus informes.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {recursos.map((recurso) => {
          const Icon = recurso.icono
          return (
            <div key={recurso.nombre} className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 hover:-translate-y-1 hover:bg-gray-900 transition">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-green-700/10 p-4 text-green-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{recurso.tipo}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{recurso.nombre}</h2>
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">
                <Download className="h-4 w-4" /> Descargar
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InstructorRecursos
