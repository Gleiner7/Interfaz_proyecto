import { FileText, Download, Edit3 } from 'lucide-react'

const obligaciones = ['Registro mensual', 'Evidencias de movilidad', 'Anexo de soporte', 'Resumen de actividades']

const CoordinadorPlantillas = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Plantillas</h1>
          <p className="mt-2 text-gray-400">Administra la plantilla activa y las obligaciones del informe.</p>
        </div>
        <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">Descargar versión actual</button>
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 sm:flex sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3 text-green-300">
            <FileText className="h-5 w-5" />
            <span className="text-sm uppercase tracking-[0.2em]">Plantilla activa</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white">Formato mensual SENA</h2>
          <p className="mt-3 text-gray-400">Incluye todas las obligaciones y secciones solicitadas por coordinación.</p>
        </div>
        <button className="mt-6 rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600 sm:mt-0">Editar plantilla</button>
      </div>

      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <h2 className="text-xl font-semibold">Obligaciones actuales</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {obligaciones.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-3xl border border-green-900/30 bg-[#111827] p-4">
              <div className="rounded-2xl bg-green-700/10 p-3 text-green-300">
                <Edit3 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white">{item}</p>
                <p className="text-sm text-gray-400">Actualizada recientemente</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoordinadorPlantillas
