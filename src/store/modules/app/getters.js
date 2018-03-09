export default {
  layout: _ => (window.screenX > window.screenY) ? 'landscape' : 'portrait'
}