import { useEffect } from 'react'

interface ModalProps {
  open: boolean
  title: string
  message: string
  onClose: () => void
  onConfirm: () => void
}

const Modal = ({ open, title, message, onClose, onConfirm }: ModalProps) => {
  useEffect(() => {
    if (!open) return
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-3xl border border-green-900/40 bg-gray-900 p-6 text-white shadow-2xl transition-all">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-gray-300">{message}</p>
        <div className="mt-6 flex items-center justify-end gap-3">
          <button onClick={onClose} className="rounded-2xl border border-green-900/50 px-4 py-2 text-sm text-gray-300 hover:bg-green-900/20">
            Cancelar
          </button>
          <button onClick={onConfirm} className="rounded-2xl bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
