import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#f5edd3',
        'paper-dark': '#ede3c5',
        ink: '#221508',
        'ink-muted': '#7d6a4f',
        accent: '#6b3a2a',
        rule: '#d5c5a8',
      },
    },
  },
  plugins: [],
} satisfies Config;
