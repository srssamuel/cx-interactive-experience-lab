// Font CSS variables — using system font stacks as fallback
// In production, replace with next/font Google imports when network available
export const fontVariables = [
  'font-display',
  'font-body',
  'font-mono',
] as const

// Applied via CSS custom properties in design-tokens.css
// --font-display: Georgia, 'Times New Roman', serif
// --font-body: system-ui, -apple-system, sans-serif
// --font-mono: 'Courier New', monospace
