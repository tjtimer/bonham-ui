<template lang='pug'>
  div(id='vue-links')
    h1 {{ msg }}
    hr
    div(class="essential")
      h2 Essential Links
        ul
          li(v-for="item in essential")
            a(:href="item.url" target="_blank") {{ item.text }}
      div(class="ecosystem")
        h2 Ecosystem
        ul
          li(v-for="item in ecosystem")
            a(:href="item.url" target="_blank") {{ item.text }}
</template>

<script>
export default {
  name: 'vue-links',
  data() {
    return {
      msg: 'Useful links for Vue.js and related.',
      essential: [
        {
          url: 'https://vuejs.org',
          text: 'Core Docs'
        },
        {
          url: 'https://forum.vuejs.org',
          text: 'Forum'
        },
        {
          url: 'https://gitter.im/vuejs/vue',
          text: 'Gitter Chat'
        },
        {
          url: 'https://twitter.com/vuejs',
          text: 'Twitter'
        },
        {
          url: 'http://vuejs-templates.github.io/webpack/',
          text: 'Docs for This Template'
        }
      ],
      ecosystem: [
        {
          url: 'http://router.vuejs.org/',
          text: 'vue-router'
        },
        {
          url: 'http://vuex.vuejs.org/',
          text: 'vuex'
        },
        {
          url: 'http://vue-loader.vuejs.org/',
          text: 'vue-loader'
        },
        {
          url: 'https://github.com/vuejs/awesome-vue',
          text: 'awesome-vue'
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
