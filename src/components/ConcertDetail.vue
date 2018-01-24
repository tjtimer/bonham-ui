<template lang="pug">
  #concert-details(@click.stop="close")
    article.card
      h1 concert details
      button.close(name="close" @click.stop="close") close
</template>
<script>
export default {
  name: "concert-details",
  methods: {
    close: function(e) {
      const el = e.target;
      if (el.id === "concert-details" || el.name === "close")
        this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
#concert-details {
  background: rgba(42, 42, 42, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    flex: 0 0 auto;
    background: #667;
    color: #6af;
    padding: 1rem;
    z-index: 100;
  }
}
</style>

