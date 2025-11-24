//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
 // plugins: [react()],
//})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/3D-animation1/',   // <-- Correct GitHub repo name
  plugins: [react()],
})

