<template lang='pug'>
div(class='hello')
	h1 {{ msg }}
	hr
	ul(class="row")
		li
			ul(class="col")
				li
					h2 Essential Links
				li(v-for="item in essential")
					a(:href="item.link" target="_blank") {{ item.text }}
		li
			ul(class="col")
				li
					h2 Ecosystem
				li(v-for="item in ecosystem")
					a(:href="item.link" target="_blank") {{ item.text }}
</template>

<script>
export default {
  name: 'vue-links',
  data() {
    return {
      msg: 'Useful links for Vue.js and related.',
      essential: [{
        link: 'https://vuejs.org',
        text: 'Core Docs'
      },
      {
        link: 'https://forum.vuejs.org',
        text: 'Forum'
      },
      {
        link: 'https://gitter.im/vuejs/vue',
        text: 'Gitter Chat'
      },
      {
        link: 'https://twitter.com/vuejs',
        text: 'Twitter'
      },
      {
        link: 'http://vuejs-templates.github.io/webpack/',
        text: 'Docs for This Template'
      }],
      ecosystem: [{
        link: 'http://router.vuejs.org/',
        text: 'vue-router'
      },
      {
        link: 'http://vuex.vuejs.org/',
        text: 'vuex'
      },
      {
        link: 'http://vue-loader.vuejs.org/',
        text: 'vue-loader'
      },
      {
        link: 'https://github.com/vuejs/awesome-vue',
        text: 'awesome-vue'
      }]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
