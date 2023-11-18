import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.ts",
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
} satisfies Config