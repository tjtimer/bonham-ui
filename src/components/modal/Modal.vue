<template lang="pug">
  div(class="modal modal-overlay")
    div(class="modal-wrapper")
      button(type="button" class="material-icons close" @click="closeModal") close
      div(class="modal-options")
        slot(name="modal-options")
      div(class="modal-headline")
        slot(name="modal-headline")
      div(class="modal-content")
        slot(name="modal-content")
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'modal',
    methods: {
      ...mapActions({
        closeModal: 'modal/closeModal'
      })
    }
  }
</script>
<style lang="scss" scoped>
@import '../../assets/colors';
* {
  transition: all 0.5s;
}
.modal {
  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .modal-headline {
    text-transform: uppercase;
  }
  .modal-wrapper,
  .modal-content {
    position: relative;
    display: block;
    padding: .6em;
    background-color: $secondary;
    color: $dark;
    text-align: left;
    box-shadow: 3px 22px 35px rgba(50, 20, 0, .5);
  }
}
</style>
