import path from "path";
import { resolve } from 'path'
const pathSrc = path.resolve(__dirname, "./src");

import { defineConfig, loadEnv } from "vite";
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import copy from 'rollup-plugin-copy'
import { viteExternalsPlugin } from 'vite-plugin-externals'



// export default config;

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  console.log(process.env.VITE_APP_OUTPUT_DIR)

  return defineConfig({
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        "@": `${path.resolve(__dirname, "src")}`,
        'vue': require.resolve('vue/dist/vue.js')
      },
      dedupe: ['vue-demi'],
    },
  
  
    plugins: [
      Vue2(),
      viteExternalsPlugin({
        vue: 'Vue'
      }),
      // copy({
      //   targets: [
      //     { src: 'public/assets/static/ui-trellis-vite/fonts', dest: 'public' },
      //     { src: 'public/assets/static/ui-trellis-vite/images', dest: 'public' }
      //   ]
      // })
    ],
    build: {
      sourcemap: true,
      outDir: `${process.env.VITE_APP_OUTPUT_DIR}/rundeck-ui/`,
      rollupOptions: {
        // input: {
        //   main: resolve(__dirname, 'index.html'),
        //   command: resolve(__dirname, 'sandbox/index.html')
        // },
        external: ['vue', 'Vue'],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|svg|ico/i.test(extType)) {
              extType = 'img';
            }
            return `${extType}/[name][extname]`;
            //return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: '[name].js',
          entryFileNames: '[name].js',
        },
      },
    },
    server: {
      port: 8080,
    },
  });  
}