export const createSession = () => {
    const nav = window.navigator;
    const screen = window.screen;
   console.log('mimeType', nav.mimeTypes);
   console.log('plugins', nav.plugins);
    return `${nav.mimeTypes.length}${nav.userAgent.replace(/\D+/g, '')}${nav.plugins.length}${screen.height || ''}${screen.width ||
      ''}${screen.pixelDepth || ''}`
  }
  