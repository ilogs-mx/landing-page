// Utilidades centralizadas para CTAs de WhatsApp.
// Mantenemos los nombres exportados existentes para no romper imports actuales.

export const apiWhatsApp = "https://api.whatsapp.com/send";
export const munyaalPhone = "5219841165842";

// Mensaje por defecto orientedo a conversión de escuelas.
export const defaultWhatsAppMessage =
  "¡Hola! Quiero más información sobre iLogs para mi escuela.";

// Construye una URL de WhatsApp lista para usar en cualquier CTA.
export function buildWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `${apiWhatsApp}?phone=${munyaalPhone}&text=${encodeURIComponent(message)}`;
}