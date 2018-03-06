<template lang="pug">
  .text.input(:class="edit ? 'edit' : 'read'")
    input(
      type="text"
      v-if="edit"
      :placeholder="value"
      v-model="changedValue"
      @change="$emit('onChange', changedValue)"
      @blur="$emit('onBlur', changedValue)"
      )
    p(v-else) {{ changedValue || value }}
    button.save(v-if="edit" @click="$emit('onSave', changedValue)")
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
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    toggleEdit: function() {
      this.edit = !this.edit;
    }
  }
};
</script>

