import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  server:{
		proxy:{
			'/api':{
        target: 'http://127.0.0.1:7998',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
		}
	}
})
