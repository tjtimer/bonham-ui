<template lang="pug">
  #concert-details(@click.stop="close")
    article.card
      h1 concert details
      button(name="close" @click.stop="close")
        x-square-icon
      article.details
        p id: {{live.currentActive.id}}
        .date
          text-input(:value="live.currentActive.date" @onSave="saveDate")
        .venue
          text-input(:value="live.currentActive.venue" @onSave="saveVenue")        
        .short-info
          text-input(:value="live.currentActive.info" @onSave="saveShortInfo")
</template>
<script>
import { mapState, mapActions } from "vuex";
import { XSquare } from "vue-feather-icon";
import TextInput from "../components/input/TextInput";
export default {
  name: "concert-details",
  components: {
    "x-square-icon": XSquare,
    "text-input": TextInput
  },
  computed: {
    ...mapState(["live"])
  },
  methods: {
    ...mapActions({
      saveDate: "live/saveDate",
      saveVenue: "live/saveVenue",
      saveShortInfo: "live/saveShortInfo"
    }),
    close(e) {
      const el = e.target;
      if (el.id === "concert-details" || el.name === "close") {
        this.$store.dispatch("live/closeDetails");
        this.$router.push("/live");
      }
    }
  },
  created: function() {
    this.$store.dispatch("live/setCurrentActive", this.$route.params.date);
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

