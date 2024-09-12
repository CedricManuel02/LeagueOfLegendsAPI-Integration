import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        backgroundRGB: "#0093E9",
        backgroundBlack: "#000024",
      },
      colors: {
        customColor: "rgba(0,0,0,0.5)",
        customColors: "rgba(0,0,0,0.5)",
        navy: {
          800: '#002436',
          900: '#000024',
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
