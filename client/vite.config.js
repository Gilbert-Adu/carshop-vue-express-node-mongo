import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //configureWebpack: {
    //devServer: {
      //proxy: {
        //'/admin': {
          //target: "http://localhost:3000"
        //}
      //}
    //}
  //}
})
