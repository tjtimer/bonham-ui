<template lang="pug">
  .text.input(:class="edit ? 'edit' : 'read'")
    input(
      v-if="edit"
      :type="type"
      :placeholder="value"
      v-model="changedValue"
      @change="$emit('onChange', changedValue)"
      @blur="$emit('onBlur', changedValue)"
      )
    p(v-else) {{ changedValue }}
    button.save(v-if="edit" @click="saveValue")
      span save
    button.toggle.edit(@click="toggleEdit")
      x-square-icon(v-if="edit")
      edit-3-icon(v-else)
</template>

<script>
import { Edit3, XSquare } from "vue-feather-icon";
export default {
  name: "text-input",
  components: {
    "edit-3-icon": Edit3,
    "x-square-icon": XSquare
  },
  data() {
    return {
      edit: false,
      changedValue: ""
    };
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    toggleEdit: function() {
      this.edit = !this.edit;
    },
    saveValue: function() {
      this.$emit('onSave', this.changedValue)
      this.toggleEdit()
    }
  },
  beforeMount: function() {
    this.changedValue = this.value
  }
};
</script>

