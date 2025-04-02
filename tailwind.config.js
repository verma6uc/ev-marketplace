
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
        // Core brand colors
        "primary": {
          DEFAULT: "#1E88E5", // Electric blue
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#1E88E5", // Primary
          600: "#1976D2",
          700: "#1565C0",
          800: "#0D47A1",
          900: "#0A2F73",
          950: "#051D4D",
        },
        "energy": {
          DEFAULT: "#4CAF50", // Energy green
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50", // Energy green
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
          950: "#0E3B12",
        },
        "slate": {
          DEFAULT: "#78909C", // Slate gray
          50: "#ECEFF1",
          100: "#CFD8DC",
          200: "#B0BEC5",
          300: "#90A4AE",
          400: "#78909C", // Slate gray
          500: "#607D8B",
          600: "#546E7A",
          700: "#455A64",
          800: "#37474F",
          900: "#263238",
          950: "#1A252A",
        },
        "amber": {
          DEFAULT: "#FFC107", // Amber for alerts/warnings
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#FFC107", // Amber
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
          950: "#E65100",
        },
        "accent": "#FF7043", // Soft orange for CTAs
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(30, 136, 229, 0)" 
          },
          "50%": { 
            boxShadow: "0 0 0 8px rgba(30, 136, 229, 0.2)" 
          },
        },
        "flow": {
          "0%": { 
            backgroundPosition: "0% 50%" 
          },
          "100%": { 
            backgroundPosition: "100% 50%" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "flow": "flow 15s linear infinite alternate",
      },
      backgroundImage: {
        "circuit-pattern": "url('/patterns/circuit.svg')",
        "energy-flow": "linear-gradient(90deg, rgba(30, 136, 229, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
  