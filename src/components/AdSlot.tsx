type AdPosition = "header" | "in-list" | "sidebar" | "bottom" | "mobile-sticky";

/**
 * Renders nothing until a real ad unit is wired up for this position.
 * Once AdSense provides a per-slot ad unit code, render its <ins> snippet
 * here instead — showing an empty placeholder box in production is a
 * policy risk (thin/no-content pages) and looks unfinished.
 */
export function AdSlot(_props: { position: AdPosition }) {
  return null;
}
