export type RolType = 'instructor' | 'coordinador'

export const mockInstructores = [
  {
    id: 'ins-01',
    nombre: 'María Fernanda López',
    ciudad: 'Pasto',
    sede: 'TIC Sur'
  },
  {
    id: 'ins-02',
    nombre: 'Carlos Eduardo Ríos',
    ciudad: 'Ipiales',
    sede: 'Gobernación'
  },
  {
    id: 'ins-03',
    nombre: 'Paola Jimena Sánchez',
    ciudad: 'Pasto',
    sede: 'Sede Central'
  }
]

export type Informe = {
  id: string
  mes: string
  estado: 'aprobado' | 'revisión' | 'correcciones'
  fecha: string
  observaciones: string
  progreso: number
}

export const mockInformes: Informe[] = [
  {
    id: 'rep-01',
    mes: 'Marzo 2026',
    estado: 'aprobado',
    fecha: '10/04/2026',
    observaciones: 'Informe validado y aprobado sin observaciones.',
    progreso: 100
  },
  {
    id: 'rep-02',
    mes: 'Abril 2026',
    estado: 'revisión',
    fecha: '08/05/2026',
    observaciones: 'Documento en evaluación por coordinación.',
    progreso: 68
  },
  {
    id: 'rep-03',
    mes: 'Mayo 2026',
    estado: 'correcciones',
    fecha: '15/05/2026',
    observaciones: 'Se requieren ajustes en las evidencias de movilidad.',
    progreso: 46
  }
]

export type Notificacion = {
  id: string
  titulo: string
  descripcion: string
  fecha: string
  leida: boolean
  tipo: 'alerta' | 'mensaje' | 'sistema'
}

export const mockNotificaciones: Notificacion[] = [
  {
    id: 'not-01',
    titulo: 'Tarea pendiente',
    descripcion: 'El informe de movilidad debe ser completado antes del viernes.',
    fecha: '21/05/2026',
    leida: false,
    tipo: 'alerta'
  },
  {
    id: 'not-02',
    titulo: 'Nueva plantilla',
    descripcion: 'Se agregó una nueva plantilla mensual para contratos SENA.',
    fecha: '18/05/2026',
    leida: true,
    tipo: 'sistema'
  },
  {
    id: 'not-03',
    titulo: 'Recordatorio',
    descripcion: 'Revisa el estado de tus reportes antes de la próxima reunión.',
    fecha: '16/05/2026',
    leida: false,
    tipo: 'mensaje'
  }
]
