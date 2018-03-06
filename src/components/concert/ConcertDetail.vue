<template lang="pug">
  #concert-details(@click.stop="close")
    article.card
      h1 concert details
      button(name="close" @click.stop="close")
        x-square-icon
      button(name="save" @click.stop="save" :disabled="!concert.active.hasChanged" )
        span save
      article.concert.details
        .date
          simple-input(
            title="date" :value="concert.active.date" type="Date" @onSave="saveDate")
        .venue
          simple-input(
            title="venue" :value="concert.active.venue" @onSave="saveVenue")
        .short-info
          simple-input(
            title="info" :value="concert.active.info" @onSave="saveShortInfo")
        .cancelled
          simple-input(
            title="cancelled" type="checkbox" :checked="concert.active.cancelled" @onSave="saveCancelled(!concert.active.cancelled)")
        p.small.right id: {{ concert.active.id }}
</template>
<script>
import { mapState, mapActions } from "vuex";
import { XSquare } from "vue-feather-icon";
import SimpleInput from "../input/SimpleInput";
export default {
  name: "concert-details",
  components: {
    "x-square-icon": XSquare,
    "simple-input": SimpleInput
  },
  computed: {
    ...mapState(["concert"])
  },
  methods: {
    ...mapActions({
      saveDate: "concert/saveDate",
      saveVenue: "concert/saveVenue",
      saveShortInfo: "concert/saveShortInfo",
      saveCancelled: "concert/saveCancelled"
    }),
    close(e) {
      const el = e.target;
      if (el.id === "concert-details" || el.name === "close") {
        this.$store.dispatch("concert/closeDetails");
        this.$router.push("/concert");
      }
    },
    save() {
      this.$store.dispatch("concert/closeDetails");
      // this.$store.dispatch("concert/saveObject");
      this.$router.push("/concert");
    }
  }
};
</script>
<style lang="scss" scoped>
#concert-details {
  background: rgba(42, 42, 42, 0.3);
  position: fixed;
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

