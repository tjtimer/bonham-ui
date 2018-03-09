<template lang="pug">
  #concert-view
    h1 concert
    ul.column.upcoming
      li(v-for="concert, index in concert.concerts")
        a.concert.to-details(:to="{path:`/${concert.date}-${concert.venue}`, params: {concert: concert}}")
          ul.row.concert(:class="concert.status")
            li.date 
              p {{ concert.date }}
            li.venue
              p {{ concert.venue }} {{ concert.city }}
            li.info
              p {{ concert.info }}
        button.concert-delete(
          type="button" 
          name="concert-delete"
          @click.prevent="deleteConcert(concert.id)")
          delete-icon
      li.concert-add
        a(:to="`/concert/add-concert/${Date.now()}`")
          p add a new show
    router-view.concert-detail
</template>
<script>
import { mapState } from "vuex";
import { Delete } from "vue-feather-icon";
export default {
  name: "concert-view",
  components: { "delete-icon": Delete },
  computed: {
    ...mapState(["concert"])
  },
  methods: {
    showConcertDetails: function(concert) {
      this.$store.dispatch("concert/openDetails", concert);
      this.$router.push(`concert/${concert.date}-${concert.venue}`);
    },
    addConcert: function() {
      this.$store.dispatch("concert/openDetails", {});
      this.$router.push(`concert/add-concert`);
    },
    deleteConcert: function(id) {
      this.$store.dispatch("concert/delete", id);
      this.$router.push(`concert/`);
    }
  },
  created() {
    this.$store.dispatch("concert/setup", this.$router);
  }
};
</script>
<style lang="scss" scoped>
#concert-view {
  border: 1px solid yellow;
  .concert-details-link {
    background: rgba(#05a6f6, 0.4);
    color: rgb(253, 129, 5);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: adjust-hue($color: #05a6f6, $degrees: -15);
      color: adjust-hue($color: rgb(253, 129, 5), $degrees: -45);
    }
    .cancelled {
      text-decoration: line-through;
      position: relative;
      &::after {
        content: " - cancelled - ";
        position: absolute;
        top: 0.3rem;
        left: 0;
        display: block;
        color: red;
        background: rgba(#666, 0.5);
        text-transform: uppercase;
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>

