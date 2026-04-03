// Font configuration — uses CSS @font-face with Google Fonts loaded at runtime
// Fallback to system fonts when Google Fonts are unavailable (build time, offline)

export const fontVariables = [
  "--font-display",
  "--font-body",
  "--font-mono",
] as const;

// CSS class string to apply font variables to html element
export const fontClassName = "";
