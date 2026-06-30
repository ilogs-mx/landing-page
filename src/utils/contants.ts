// Utilidades centralizadas para CTAs de WhatsApp y redes sociales.
// Mantenemos los nombres exportados existentes para no romper imports actuales.

import type { SvgComponent } from "astro/types";
import LinkedinIcon from "../assets/svg/linkedin.svg";
import TiktokIcon from "../assets/svg/tiktok.svg";
import FacebookIcon from "../assets/svg/facebook.svg";
import InstagramIcon from "../assets/svg/instagram.svg";

export const apiWhatsApp = "https://api.whatsapp.com/send";
export const munyaalPhone = "5219841165842";

// Mensaje por defecto orientedo a conversión de escuelas.
export const defaultWhatsAppMessage =
  "¡Hola! Quiero más información sobre iLogs para mi escuela.";

// Construye una URL de WhatsApp lista para usar en cualquier CTA.
export function buildWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `${apiWhatsApp}?phone=${munyaalPhone}&text=${encodeURIComponent(message)}`;
}

// Fuente única para las redes sociales de la marca.
// `icon` es el componente SVG importado desde src/assets/svg (patrón Astro 5).
// `iconClass` opcionaliza el tamaño del enlace, porque cada glyph tiene
// proporciones distintas y conviene escalarlos de forma independiente.
export interface SocialLink {
  name: string;
  href: string;
  icon: SvgComponent;
  iconClass?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ilogs-plataforma/",
    icon: LinkedinIcon,
    iconClass: "w-6 h-6 md:w-10 md:h-10",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ilogs_mx",
    icon: TiktokIcon,
    iconClass: "w-5 h-5 md:w-7 md:h-7",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ilogsmx",
    icon: FacebookIcon,
    iconClass: "w-6 h-6 md:w-10 md:h-10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ilogs_oficial/",
    icon: InstagramIcon,
    iconClass: "w-6 h-6 md:w-10 md:h-10",
  },
];