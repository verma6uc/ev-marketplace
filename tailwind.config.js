
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Main palette
        primary: {
          DEFAULT: "#0066CC", // Electric blue
          50: "#e6f0fa",
          100: "#cce1f5",
          200: "#99c3eb",
          300: "#66a5e0",
          400: "#3387d6",
          500: "#0066CC", // Electric blue (primary)
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
        },
        secondary: {
          DEFAULT: "#2FCB5A", // Energy green
          50: "#eafaef",
          100: "#d5f5df",
          200: "#acebaf",
          300: "#82e180",
          400: "#59d76f",
          500: "#2FCB5A", // Energy green (secondary)
          600: "#25a249",
          700: "#1c7a37",
          800: "#125124",
          900: "#092912",
        },
        accent: {
          DEFAULT: "#F59E0B", // Amber for alerts/CTAs
          50: "#fef5e7",
          100: "#fdebd0",
          200: "#fbd7a1",
          300: "#f9c372",
          400: "#f7af43",
          500: "#F59E0B", // Amber (accent)
          600: "#c47e09",
          700: "#935f07",
          800: "#623f04",
          900: "#312002",
        },
        slate: {
          DEFAULT: "#64748B", // Slate gray
          50: "#f0f2f4",
          100: "#e1e4e9",
          200: "#c3c9d3",
          300: "#a5afbd",
          400: "#8794a7",
          500: "#64748B", // Slate gray (neutral)
          600: "#525d70",
          700: "#3d4654",
          800: "#292f38",
          900: "#14171c",
        },
        // Semantic colors
        success: "#2FCB5A", // Same as secondary
        warning: "#F59E0B", // Same as accent
        danger: "#EF4444", // Red for error states
        info: "#0066CC", // Same as primary
        background: "#FFFFFF",
        foreground: "#0F172A",
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(222.2 84% 4.9%)",
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        normal: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 3s ease infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
