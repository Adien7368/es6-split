export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: function manualChunks(id) {
          if (id.includes('counter')) return 'counter';
        },
      },
    },
  },
};
