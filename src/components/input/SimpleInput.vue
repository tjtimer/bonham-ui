<template lang="pug">
  .simple.input(:class="edit ? `${type} edit` : `${type} read`")
    label {{ title }}
    input(
      v-if="edit"
      :type="type"
      :placeholder="value"
      :checked="checked"
      v-model="changedValue"
      @change="$emit('onChange', [title, changedValue])"
      @blur="$emit('onBlur', [title, changedValue])")
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
  name: "simple-input",
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
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: String,
      required: false,
      default: "type here ..."
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggleEdit: function() {
      this.edit = !this.edit;
    },
    saveValue: function() {
      this.$emit("onSave", [this.title, this.changedValue]);
      this.toggleEdit();
    }
  },
  created() {
    if (this.type === "checkbox") {
      this.changedValue = this.checked;
    } else {
      this.changedValue = this.value;
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
  label {
    font-weight: 700;
    font-style: italic;
  }
}
</style>
