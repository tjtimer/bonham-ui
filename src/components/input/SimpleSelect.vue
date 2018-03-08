<template lang="pug">
  .simple.select(:class="edit ? `edit` : `read`")
    label {{ title }}
    ul.edit(v-if="edit")
      li.option(v-for="option in options" @click="$emit('onSelect', option)") 
        span {{ option }}
        check-icon(v-if="option === value")

    p(v-else) {{ value }}
    button.toggle(@click="toggleEdit")
      x-square-icon(v-if="edit")
      edit-3-icon(v-else)
</template>

<script>
import { Check, Edit3, XSquare } from 'vue-feather-icon';
export default {
  name: 'simple-input',
  components: {
    'check-icon': Check,
    'edit-3-icon': Edit3,
    'x-square-icon': XSquare
  },
  data() {
    return {
      edit: false,
    };
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'select'
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    options: {
      type: List[String],
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    }
  }
};
</script>

<style lang="scss" scoped>
.simple {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 6px 3px;
  &.edit {}

  &.read {}
}
</style>
