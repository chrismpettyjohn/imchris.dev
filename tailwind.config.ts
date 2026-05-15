
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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced blue palette
				navy: {
					DEFAULT: '#0A192F',
					50: '#E8F2FF',
					100: '#D1E5FF',
					200: '#A3CBFF',
					300: '#74B1FF',
					400: '#4697FF',
					500: '#187DFF',
					600: '#0063E6',
					700: '#004AB3',
					800: '#003180',
					900: '#0A192F',
				},
				sky: {
					DEFAULT: '#87CEEB',
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9',
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#0C4A6E',
				},
				ocean: {
					DEFAULT: '#006994',
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9',
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#006994',
				},
				mint: {
					DEFAULT: '#64FFDA',
					50: '#F0FFFE',
					100: '#C7FFEF',
					200: '#8FFFDE',
					300: '#64FFDA',
					400: '#20E3B2',
					500: '#00C896',
					600: '#00A67A',
					700: '#008760',
					800: '#006B4D',
					900: '#00563E',
				},
				glass: {
					DEFAULT: 'rgba(255, 255, 255, 0.1)',
					light: 'rgba(255, 255, 255, 0.15)',
					dark: 'rgba(0, 0, 0, 0.1)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(-10px) translateX(5px)'
					},
					'66%': {
						transform: 'translateY(5px) translateX(-5px)'
					}
				},
				'drift': {
					'0%': {
						transform: 'translateX(-100px)'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 100px))'
					}
				},
				'cloud-drift-1': {
					'0%': {
						transform: 'translateX(-100px) translateY(0px)'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 100px)) translateY(-20px)'
					}
				},
				'cloud-drift-2': {
					'0%': {
						transform: 'translateX(-150px) translateY(10px)'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 150px)) translateY(-10px)'
					}
				},
				'cloud-drift-3': {
					'0%': {
						transform: 'translateX(-200px) translateY(-5px)'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 200px)) translateY(15px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'drift': 'drift 20s linear infinite',
				'cloud-drift-1': 'cloud-drift-1 25s linear infinite',
				'cloud-drift-2': 'cloud-drift-2 30s linear infinite',
				'cloud-drift-3': 'cloud-drift-3 35s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'ocean-sky': 'linear-gradient(135deg, #001a2c 0%, #002d4b 50%, #00426d 100%)',
				'deep-ocean': 'linear-gradient(180deg, #020617 0%, #0f172a 100%)',
				'sky-clouds': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
				'noise': "url('/img/noise.png')",
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
