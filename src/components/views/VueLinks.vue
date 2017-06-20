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
<style scoped>
* {
  transition: all 0.2s;
}

div.hello {
  background-color: #433;
  color: #AFB;
  padding: 1em;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
}

h1,
h2 {
  font-weight: normal;
}

h1 {
  margin-bottom: 0.8em;
}

h2 {
  margin-top: 0.6em;
  padding-bottom: 6px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 6px;
}

.row {
  justify-content: flex-start;
}

.row li {
  flex: 1 1 50%;
}

</style>
