import { useMemo, useState } from 'react'
import { Plus, Upload, FolderOpen, Trash2, CheckCircle2 } from 'lucide-react'

const tabs = ['Información', 'Actividades', 'Movilidad', 'Vista Previa'] as const

type TabKey = (typeof tabs)[number]

type Actividad = {
  id: string
  descripcion: string
}

type Movilidad = {
  id: string
  lugar: string
  inicio: string
  fin: string
}

const InstructorSubirInforme = () => {
  const [step, setStep] = useState(1)
  const [activeTab, setActiveTab] = useState<TabKey>('Información')
  const [folderReady, setFolderReady] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [actividades, setActividades] = useState<Actividad[]>([
    { id: 'act-1', descripcion: 'Reunión de seguimiento con equipo en sede.' }
  ])
  const [movilidad, setMovilidad] = useState<Movilidad[]>([
    { id: 'mov-1', lugar: 'Pasto', inicio: '2026-05-10', fin: '2026-05-11' }
  ])
  const [form, setForm] = useState({ ciudad: 'Pasto', mes: 'Mayo', año: '2026', contrato: 'SENA-123', supervisor: 'Carolina Martínez', sede: 'Sede Central', contratista: 'Talentum', documento: '1234567890' })

  const handleAddActividad = () => {
    setActividades((prev) => [...prev, { id: `act-${prev.length + 1}`, descripcion: '' }])
  }

  const handleAddMovilidad = () => {
    setMovilidad((prev) => [...prev, { id: `mov-${prev.length + 1}`, lugar: '', inicio: '', fin: '' }])
  }

  const summary = useMemo(() => ({
    ciudad: form.ciudad,
    mes: form.mes,
    año: form.año,
    contrato: form.contrato,
    supervisor: form.supervisor,
    sede: form.sede,
    contratista: form.contratista,
    documento: form.documento,
    actividades: actividades.length,
    viajes: movilidad.length
  }), [form, actividades.length, movilidad.length])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
        <div className="flex flex-wrap items-center gap-3">
          {[1, 2].map((num) => (
            <div key={num} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white">{num}</div>
              <span className="text-sm text-gray-300">Paso {num}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          <button
            onClick={() => setStep(1)}
            className={`rounded-2xl px-4 py-2 text-sm ${step === 1 ? 'bg-green-700 text-white' : 'bg-slate-900 text-gray-300 hover:bg-green-900/20'}`}
          >
            Generar Informe
          </button>
          <button
            onClick={() => setStep(2)}
            className={`rounded-2xl px-4 py-2 text-sm ${step === 2 ? 'bg-green-700 text-white' : 'bg-slate-900 text-gray-300 hover:bg-green-900/20'}`}
          >
            Subir PDF
          </button>
        </div>
      </div>

      {step === 1 ? (
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <div className="flex flex-wrap items-center gap-4 border-b border-green-900/30 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-2xl px-4 py-2 text-sm ${activeTab === tab ? 'bg-green-700 text-white' : 'text-gray-400 hover:bg-green-900/30 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Información' && (
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {Object.entries(form).map(([key, value]) => (
                <label key={key} className="space-y-2 text-sm text-gray-300">
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <input
                    value={value}
                    onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none"
                  />
                </label>
              ))}
            </div>
          )}

          {activeTab === 'Actividades' && (
            <div className="mt-6 space-y-4">
              {actividades.map((actividad, index) => (
                <div key={actividad.id} className="rounded-3xl border border-green-900/40 bg-[#111827] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white">{index + 1}</div>
                    <span className="text-sm text-gray-400">Descripción</span>
                  </div>
                  <textarea
                    value={actividad.descripcion}
                    onChange={(e) =>
                      setActividades((prev) => prev.map((item) => (item.id === actividad.id ? { ...item, descripcion: e.target.value } : item)))
                    }
                    rows={4}
                    className="mt-4 w-full rounded-2xl border border-green-900/50 bg-gray-900 p-4 text-white outline-none"
                    placeholder="Describe la actividad realizada"
                  />
                </div>
              ))}
              <button onClick={handleAddActividad} className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">
                <Plus className="h-4 w-4" /> Agregar actividad
              </button>
            </div>
          )}

          {activeTab === 'Movilidad' && (
            <div className="mt-6 space-y-4">
              <div className="overflow-x-auto rounded-3xl border border-green-900/40 bg-[#111827] p-4">
                <table className="min-w-full text-left text-sm text-gray-300">
                  <thead>
                    <tr>
                      <th className="px-3 py-3">Orden</th>
                      <th className="px-3 py-3">Lugar</th>
                      <th className="px-3 py-3">Fecha inicial</th>
                      <th className="px-3 py-3">Fecha final</th>
                      <th className="px-3 py-3">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movilidad.map((item, index) => (
                      <tr key={item.id} className="border-t border-green-900/30">
                        <td className="px-3 py-3">{index + 1}</td>
                        <td className="px-3 py-3">
                          <input
                            value={item.lugar}
                            onChange={(e) =>
                              setMovilidad((prev) => prev.map((row) => (row.id === item.id ? { ...row, lugar: e.target.value } : row)))
                            }
                            className="w-full rounded-2xl border border-green-900/50 bg-gray-900 px-3 py-2 text-white outline-none"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <input
                            type="date"
                            value={item.inicio}
                            onChange={(e) =>
                              setMovilidad((prev) => prev.map((row) => (row.id === item.id ? { ...row, inicio: e.target.value } : row)))
                            }
                            className="w-full rounded-2xl border border-green-900/50 bg-gray-900 px-3 py-2 text-white outline-none"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <input
                            type="date"
                            value={item.fin}
                            onChange={(e) =>
                              setMovilidad((prev) => prev.map((row) => (row.id === item.id ? { ...row, fin: e.target.value } : row)))
                            }
                            className="w-full rounded-2xl border border-green-900/50 bg-gray-900 px-3 py-2 text-white outline-none"
                          />
                        </td>
                        <td className="px-3 py-3">
                          <button
                            onClick={() => setMovilidad((prev) => prev.filter((row) => row.id !== item.id))}
                            className="rounded-2xl bg-red-700 px-3 py-2 text-xs text-white hover:bg-red-600"
                          >
                            <Trash2 className="inline h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={handleAddMovilidad} className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600">
                <Plus className="h-4 w-4" /> Agregar
              </button>
            </div>
          )}

          {activeTab === 'Vista Previa' && (
            <div className="mt-6 grid gap-4 rounded-3xl border border-green-900/40 bg-[#111827] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Resumen del informe</p>
                  <h3 className="mt-2 text-2xl font-bold">{form.mes} {form.año} • {form.ciudad}</h3>
                </div>
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(summary).map(([key, value]) => (
                  <div key={key} className="rounded-3xl border border-green-900/40 bg-gray-900 p-4 text-sm">
                    <p className="text-gray-400 uppercase tracking-[0.12em]">{key}</p>
                    <p className="mt-2 text-white font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-8">
          {folderReady ? (
            <div className="space-y-6">
              <div className="rounded-3xl border border-green-900/40 bg-[#111827] p-6 text-center">
                <FolderOpen className="mx-auto h-12 w-12 text-green-300" />
                <p className="mt-4 text-lg font-semibold">Arrastra tu PDF o selecciónalo</p>
                <p className="mt-2 text-gray-400">Máximo 50MB. Solo formato PDF permitido.</p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <label className="rounded-2xl border border-green-900/50 bg-green-700 px-5 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-green-600">
                    Seleccionar PDF
                    <input
                      type="file"
                      accept="application/pdf"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file && file.size <= 50 * 1024 * 1024) setSelectedFile(file)
                      }}
                    />
                  </label>
                  <button className="rounded-2xl bg-gray-900 px-5 py-3 text-sm text-gray-100 hover:bg-gray-800">Guardar</button>
                  <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">Enviar Informe</button>
                </div>
                {selectedFile ? <p className="mt-4 text-sm text-gray-300">Archivo listo: {selectedFile.name}</p> : null}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-green-900/40 bg-[#111827] p-8 text-center">
              <FolderOpen className="mx-auto h-16 w-16 text-green-300" />
              <p className="mt-4 text-xl font-semibold">Aún no existe carpeta</p>
              <p className="mt-2 text-gray-400">Crea la carpeta de informes para almacenar tu documento.</p>
              <button onClick={() => setFolderReady(true)} className="mt-6 rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">
                Crear carpeta
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default InstructorSubirInforme
