export default {
  layout: () => window.screenX > window.screenY ? 'landscape' : 'portrait'
}