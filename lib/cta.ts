const PHONE = "34617853179";

export const BOOKSY_URL = "https://juankprofesional.booksy.com/a/";

export const CTA_TEXT = "Solicitar asesoría personalizada";
export const CTA_MICRO = "Sin compromiso · Respuesta en menos de 1 hora";

export function buildWaUrl(page?: string): string {
  const msg = page
    ? `Hola, vengo desde la web (${page}) y quiero mi asesoría personalizada.`
    : "Hola, vengo desde la web y quiero mi asesoría personalizada.";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function buildWaUrlMsg(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_URL = buildWaUrl();
