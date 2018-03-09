<template lang="pug">
  #concert-details
    article.card
      h1 concert details
      button(type="button" name="close" @click.stop="done('close')")
        x-square-icon
      .details
        .field.date
          simple-input(
            title="date" :value="concert.active.date" type="Date" @onSave="updateField")
        .field.venue
          simple-input(
            title="venue" :value="concert.active.venue" @onSave="updateField")
        .field.info
          simple-input(
            title="info" :value="concert.active.info" @onSave="updateField")
        .field.status
          simple-select(
            title="status" 
            :options="concert.statusTypes"
            :value="concert.active.status"
            @onSelect="updateField")
        p.id.small.right id: {{ concert.active.id }}
      button(type="button" name="save" @click.stop="done('save')" :disabled="!concert.active.hasChanged" )
        span save
      button(type="button" name="cancel" @click.stop="done('cancel')" )
        span cancel
</template>
<script>
import { mapState, mapActions } from "vuex";
import { XSquare } from "vue-feather-icon";
import SimpleInput from "../input/SimpleInput";
import SimpleSelect from "../input/SimpleSelect";
export default {
  name: "concert-details",
  components: {
    "x-square-icon": XSquare,
    "simple-input": SimpleInput,
    "simple-select": SimpleSelect
  },
  props: {
    concert: Object,
    required: false,
    default: {}
  },
  computed: {
    ...mapState(["concert"])
  },
  methods: {
    ...mapActions({
      updateField: "concert/updateField"
    }),
    done(type) {
      if (type === "save") this.$store.dispatch("concert/saveObject");
      else this.$store.dispatch("concert/closeDetails", type === "cancel");
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
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    flex: 0 0 auto;
    background: #59caf6;
    color: #310;
    padding: 1.5rem;
    z-index: 100;
  }
  .field {
    padding: 1.2rem 2rem;
    font-size: 1.4rem;
  }
}
</style>

