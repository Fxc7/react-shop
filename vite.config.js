import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy({
    externalSystemJS: true,
    additionalLegacyPolyfills: true,
    targets: ['defaults', 'not IE 11'],
    useBuiltIns: 'usage',
    include: [/\.js$/],
    exclude: [/node_modules/],
    forceAllTransforms: true,
    disableAutoModuleReplacement: true,
    disableEsModuleInterop: true,
    debug: true,
    silent: true,
    overrideBrowserslist: ['defaults', 'not IE 11'],
    corejs: 3,
    features: {
      'es.promise.all-settled': ['default'],
    },
  })],
})
