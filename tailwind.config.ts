
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				batman: {
					dark: '#1A1F2C', // dark blue
					primary: '#2D3748', // batman blue
					secondary: '#4A5568', // medium blue
				},
				riddler: {
					neon: '#39FF14', // bright neon green
					dark: '#0D5C28', // dark green
					accent: '#9AE6B4', // light green
				},
				gotham: {
					sky: '#0F1729', // night sky
					building: '#2D3748', // building color
					light: '#F7FAFC', // light accents
				},
			},
			fontFamily: {
				batman: ['Gotham', 'sans-serif'],
				riddler: ['Comic Sans MS', 'cursive'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' },
					'100%': { transform: 'translate(0)' },
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				'flicker': {
					'0%': { opacity: '1' },
					'50%': { opacity: '0.3' },
					'100%': { opacity: '1' },
				},
				'bat-fly': {
					'0%': { transform: 'translate(-100vw, 50vh) rotate(0deg) scale(0.5)' },
					'100%': { transform: 'translate(100vw, 0) rotate(360deg) scale(1)' },
				},
				'question-appear': {
					'0%': { opacity: '0', transform: 'scale(0)' },
					'60%': { opacity: '1', transform: 'scale(1.2)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'riddler-pulse': {
					'0%': { boxShadow: '0 0 0 0 rgba(57, 255, 20, 0.7)' },
					'70%': { boxShadow: '0 0 0 10px rgba(57, 255, 20, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(57, 255, 20, 0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'flicker': 'flicker 2s ease-in-out infinite',
				'bat-fly': 'bat-fly 10s linear',
				'question-appear': 'question-appear 0.5s ease-out forwards',
				'riddler-pulse': 'riddler-pulse 2s infinite',
			},
			backgroundImage: {
				'gotham-skyline': "url('/src/assets/gotham-skyline.jpg')",
				'riddler-pattern': "linear-gradient(135deg, rgba(57, 255, 20, 0.1) 25%, transparent 25%, transparent 50%, rgba(57, 255, 20, 0.1) 50%, rgba(57, 255, 20, 0.1) 75%, transparent 75%, transparent)",
				'bat-signal': "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(26, 31, 44, 0.2) 100%)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
