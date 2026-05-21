import { useEffect, useState } from 'react'

interface ToastProps {
  message: string | null
  onClose: () => void
}

const Toast = ({ message, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) {
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = window.setTimeout(() => {
      setVisible(false)
      onClose()
    }, 3000)
    return () => window.clearTimeout(timer)
  }, [message, onClose])

  if (!message || !visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm rounded-3xl border border-emerald-500/70 bg-slate-900/95 p-4 shadow-glow">
      <p className="text-sm text-gray-100">{message}</p>
    </div>
  )
}

export default Toast
