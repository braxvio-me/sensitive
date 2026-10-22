const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-10-15" → "15 Oct 2026". Locale-independent so server and client render the same text. */
export function formatIsoDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/**
 * Capabilities are written as "Title: description". Splits them so the title
 * can be set as a heading; strings without a short leading title come back whole.
 */
export function splitCapability(capability: string): { title?: string; body: string } {
  const idx = capability.indexOf(": ");
  if (idx > 0 && idx <= 60) {
    return { title: capability.slice(0, idx), body: capability.slice(idx + 2) };
  }
  return { body: capability };
}
