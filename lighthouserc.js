module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'image-size-responsive': 'off',
        'render-blocking-resources': 'off',
        'uses-long-cache-ttl': 'off'
      },
    },
  },
};
