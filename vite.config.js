export default {
  build: {
    rollupOptions: {
      output: {
        format: 'cjs',
        manualChunks: function manualChunks(id) {
          if (id.includes('counter')) return 'counter';
        },
      },
    },
  },
};
