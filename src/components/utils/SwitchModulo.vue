<template lang="pug">
div(class="switch-modulo" :class="direction")
  button(class="previous material-icons" @click="$emit('moduloPrevious')") {{ next }}
  slot(name="previous")
  slot(name="current")
  slot(name="next")
  input(
    v-if="showInput"
    type="number"
    v-model="inputValue"
    :min="inputMin"
    :max="inputMax"
    :placeholder="inputPlaceholder"
    @change="$emit('inputChange', inputValue)"
    @blur="$emit('inputBlur', inputValue)")
  button(class="next material-icons" @click="$emit('moduloNext')") {{ previous }}
</template>
<script>
export default {
  name: 'switch-modulo',
  props: [
    'next', 'previous', 'direction',
    'showInput', 'inputPlaceholder',
    'inputMin', 'inputMax'],
  data: function() {
    return {
      inputValue: this.inputPlaceholder
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/helpers/_mixins';
@import '../../assets/components/_buttons';
.switch-modulo {
  @include flexparent(column, stretch, center);
  padding: calc(1rem / 3);
  &.horizontal {
    flex-flow: nowrap;
  }
  &.vertical {
    button {
      @extend %button;
    }
  }
}
</style>
