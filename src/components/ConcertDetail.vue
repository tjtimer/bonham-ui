<template lang="pug">
  #concert-details(@click.stop="close")
    article.card
      h1 concert details
      button(name="close" @click.stop="close")
        x-square-icon
      button(name="save" @click.stop="save" :disabled="!live.currentActive.hasChanged" )
        span save
      article.concert.details
        .date
          simple-input(
            title="Date" :value="live.currentActive.date" type="Date" @onSave="saveDate")
        .venue
          simple-input(
            title="Venue":value="live.currentActive.venue" @onSave="saveVenue")
        .short-info
          simple-input(
            title="Info":value="live.currentActive.info" @onSave="saveShortInfo")
        .cancelled
          simple-input(
            title="Cancelled" type="checkbox" :checked="live.currentActive.cancelled" @onSave="saveCancelled(!live.currentActive.cancelled)")
        p.small.right id: {{ live.currentActive.id }}
</template>
<script>
import { mapState, mapActions } from "vuex";
import { XSquare } from "vue-feather-icon";
import SimpleInput from "../components/input/SimpleInput";
export default {
  name: "concert-details",
  components: {
    "x-square-icon": XSquare,
    "simple-input": SimpleInput
  },
  computed: {
    ...mapState(["live"])
  },
  methods: {
    ...mapActions({
      saveDate: "live/saveDate",
      saveVenue: "live/saveVenue",
      saveShortInfo: "live/saveShortInfo",
      saveCancelled: "live/saveCancelled"
    }),
    close(e) {
      const el = e.target;
      if (el.id === "concert-details" || el.name === "close") {
        this.$store.dispatch("live/closeDetails");
        this.$router.push("/live");
      }
    },
    save() {
      this.$store.dispatch("live/closeDetails");
      // this.$store.dispatch("live/saveDetails");
      this.$router.push("/live");
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

