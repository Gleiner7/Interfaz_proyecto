import { useState } from 'react'

const InstructorPerfil = () => {
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({ nombre: 'María Fernanda López', correo: 'instructor@sena.edu.co', celular: '+57 310 123 4567', banco: 'Bancolombia', cuenta: '1234567890', seguridad: '********' })

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Perfil</h1>
          <p className="mt-2 text-gray-400">Actualiza tu información personal y de seguridad.</p>
        </div>
        <button onClick={() => setEditMode((prev) => !prev)} className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-600">
          {editMode ? 'Guardar perfil' : 'Editar perfil'}
        </button>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Información personal</h2>
          <div className="mt-5 space-y-4">
            {['nombre', 'correo', 'celular'].map((field) => (
              <label key={field} className="block text-sm text-gray-300">
                <span className="text-gray-400 capitalize">{field}</span>
                <input
                  disabled={!editMode}
                  value={(form as any)[field]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none disabled:cursor-not-allowed"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Información bancaria</h2>
          <div className="mt-5 space-y-4">
            {['banco', 'cuenta'].map((field) => (
              <label key={field} className="block text-sm text-gray-300">
                <span className="text-gray-400 capitalize">{field}</span>
                <input
                  disabled={!editMode}
                  value={(form as any)[field]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
                  className="mt-2 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none disabled:cursor-not-allowed"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-green-900/40 bg-gray-800 p-6">
          <h2 className="text-xl font-semibold">Seguridad</h2>
          <div className="mt-5 space-y-4">
            <label className="block text-sm text-gray-300">
              <span className="text-gray-400">Contraseña</span>
              <input type="password" disabled value={form.seguridad} className="mt-2 w-full rounded-2xl border border-green-900/50 bg-gray-900 px-4 py-3 text-white outline-none" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorPerfil
