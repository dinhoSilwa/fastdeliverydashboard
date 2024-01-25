import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const REPO = "dashboarddelivery"
// https://vitejs.dev/config/
export default defineConfig({
  base : `/${REPO}/`,
  plugins: [react()],
})
