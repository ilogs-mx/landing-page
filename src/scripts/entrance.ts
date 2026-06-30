/**
 * Sistema unificado de animaciones de entrada para la home.
 *
 * Objetivos:
 *  - Patrón base consistente: fade + translateY suave.
 *  - Duración corta y easing compartido para evitar el "zoo" de timings
 *    distinto por sección.
 *  - Stagger solo en listas/cards/grupos; el resto entra como bloque.
 *  - Respeto coherente a `prefers-reduced-motion`: en ese caso el contenido
 *    queda visible (no se aplica `gsap.from`, que dejaría opacidad 0).
 *
 * Uso:
 *   - Hero (sin ScrollTrigger): `revealNow(".hero-text > *", { stagger })`.
 *   - Resto de secciones: `revealOnScroll(".step", { trigger, stagger })`.
 *
 * Los microloops (QR pulso / scan / campana) viven en su propio componente
 * porque no son "entradas"; aquí solo se formaliza el reveal.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Tokens compartidos del reveal base. */
const BASE = {
  duration: 0.5,
  ease: "power3.out",
  y: 20,
} as const;

const MOTION_OK = "(prefers-reduced-motion: no-preference)";

type RevealVars = {
  y?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  delay?: number;
};

type ScrollRevealVars = RevealVars & {
  trigger?: gsap.DOMTarget;
  start?: string;
};

function buildVars(options: RevealVars = {}): gsap.TweenVars {
  return {
    opacity: 0,
    y: options.y ?? BASE.y,
    duration: options.duration ?? BASE.duration,
    ease: options.ease ?? BASE.ease,
    stagger: options.stagger ?? 0,
    delay: options.delay ?? 0,
  };
}

/**
 * Revelado inmediato (sin ScrollTrigger). Pensado para el Hero: arranca
 * tan pronto como se evalúa el script de la sección.
 */
export function revealNow(
  target: gsap.TweenTarget,
  options: RevealVars = {},
): void {
  gsap.matchMedia().add(MOTION_OK, () => {
    gsap.from(target, buildVars(options));
  });
}

/**
 * Revelado por scroll uniforme para las secciones de la home.
 * `trigger` por defecto es el propio target; `start` por defecto "top 80%".
 */
export function revealOnScroll(
  target: gsap.TweenTarget,
  options: ScrollRevealVars = {},
): void {
  gsap.matchMedia().add(MOTION_OK, () => {
    gsap.from(target, {
      ...buildVars(options),
      scrollTrigger: {
        trigger: options.trigger ?? target,
        start: options.start ?? "top 80%",
      },
    });
  });
}