<template lang="pug">
  .simple.select(:class="edit ? `edit` : `read`")
    label {{ title }}
    ul.edit(v-if="edit")
      li.option(v-for="option in options" @click="select(option)") 
        span {{ option }}
        check-icon(v-if="option === value")
    p(v-else) {{ value }}
    button.toggle(@click="toggleEdit")
      x-square-icon(v-if="edit")
      edit-3-icon(v-else)
</template>

<script>
import { Check, Edit3, XSquare } from "vue-feather-icon";
export default {
  name: "simple-input",
  components: {
    "check-icon": Check,
    "edit-3-icon": Edit3,
    "x-square-icon": XSquare
  },
  data() {
    return {
      edit: false
    };
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "select"
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    select(option) {
      this.$emit("onSelect", [this.title, option]);
      this.toggleEdit();
    }
  }
};
</script>

<style lang="scss" scoped>
.simple {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: space-between;
  justify-content: space-between;
  padding: 6px 3px;
  .read {
    background: #222;
    color: #5af;
  }

  .edit {
    cursor: pointer;
    background: #5af;
    color: #222;
    display: flex;
    flex-flow: column;
    align-items: stretch;
  }
}
</style>
