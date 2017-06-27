<template lang="pug">
div(class="switch-modulo" :class="direction")
  button(class="previous material-icons" @click="$emit('moduloPrevious')") {{ next }}
  slot(name="previous")
  slot(name="current")
  slot(name="next")
  button(class="next material-icons" @click="$emit('moduloNext')") {{ previous }}
</template>
<script>
export default {
  name: 'switch-modulo',
  props: ['next', 'previous', 'direction']
}
</script>
<style lang="scss">
@import '../../assets/helpers/_mixins';
@import '../../assets/components/_buttons';
.switch-modulo {
  @include flexparent(column, stretch, center);
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
