import Qr from "../assets/svg/qr.svg";
import Calendar from "../assets/svg/calendar.svg";
import Security from "../assets/svg/security.svg";
import Family from "../assets/svg/family.svg";
import Book from "../assets/svg/book.svg";
import Backpack from "../assets/svg/backpack.svg";
import Star from "../assets/svg/star.svg";

export const benefits = [
  {
    title: "Salidas verificadas con QR dinámico",
    subtitle:
      "Cada alumno sale con un código QR único y de vencimiento de 24 h. Nada de listas manuales ni suplantaciones.",
    icon: Qr,
  },
  {
    title: "Seguridad en cada entrega",
    subtitle:
      "Proceso 100% verificado para reforzar la seguridad escolar y la tranquilidad de las familias.",
    icon: Security,
  },
  {
    title: "Tranquilidad para las familias",
    subtitle:
      "Padres y tutores autorizan a familiares, consultan historial y reciben notificaciones inmediatas.",
    icon: Family,
  },
  {
    title: "Eventos y notificaciones escolares",
    subtitle:
      "Crea eventos escolares y notifica al instante a los padres desde la misma aplicación.",
    icon: Calendar,
  },
];

// Puntos de dolor que viven las escuelas sin un proceso digital de salida.
export const painPoints = [
  {
    title: "Listas manuales y errores",
    description: "Hojas de papel, llamadas y confusiones en cada entrega.",
    icon: Book,
  },
  {
    title: "Tiempos de espera largos",
    description: "Filas en la puerta y padres frustrados todos los días.",
    icon: Backpack,
  },
  {
    title: "Riesgo de entrega a personas no autorizadas",
    description: "Sin verificación, basta con decir el nombre del alumno.",
    icon: Security,
  },
];

// Pasos del “cómo funciona”.
export const steps = [
  {
    number: "1",
    title: "Registra alumnos y autorizados",
    description:
      "Carga a tus alumnos y define quiénes están autorizados a recogerlos desde el panel de la escuela.",
  },
  {
    number: "2",
    title: "El padre genera su QR",
    description:
      "Desde la app, el tutor genera un QR dinámico con vigencia de 24 h para esa salida.",
  },
  {
    number: "3",
    title: "El personal valida en puerta",
    description:
      "El personal escanea el QR y confirma la autorización en segundos, sin papel ni llamadas.",
  },
  {
    number: "4",
    title: "Entrega segura y notificada",
    description:
      "El alumno es entregado solo a personas autorizadas y el tutor recibe una notificación al instante.",
  },
];

// Testimonios breves de texto (además de los videos).
export const testimonials = [
  {
    quote:
      "Las salidas pasaron de ser un caos a un proceso ordenado. Los padres notan la diferencia.",
    author: "Coordinación escolar",
    role: "Primaria",
    icon: Star,
  },
  {
    quote:
      "Por fin tengo tranquilidad de saber que mi hijo sale solo con quien está autorizado.",
    author: "Tutora",
    role: "Familia iLogs",
    icon: Star,
  },
  {
    quote:
      "Implementarlo fue más rápido de lo que esperaba. El equipo de iLogs nos acompañó todo el ciclo.",
    author: "Dirección",
    role: "Preescolar",
    icon: Star,
  },
];