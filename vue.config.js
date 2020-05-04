module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'BPM Counter',
    themeColor: '#40c0cb',
    msTileColor: '#313131',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
}
