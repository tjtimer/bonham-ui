<template lang="pug">
  #concert-view
    h1 concert
    ul.column.upcoming
      li(v-for="concert, index in concert.concerts")
        a.concert-details-link(:class="concert.status" @click.prevent="openDetails(concert)")
          ul.row
            li.date 
              p {{ concert.date }}
            li.venue
              p {{ concert.venue }} {{ concert.city }}
            li.info
              p {{ concert.info }}
        button(type="button" @click="deleteConcert(concert.id)")
          delete-icon
      li.add-concert
        a.concert-add-link(@click.prevent="addConcert")
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
    async openDetails(concert) {
      await this.$store.dispatch("concert/openDetails", concert);
      this.$router.push(`concert/${concert.date}-${concert.venue}`);
    },
    addConcert() {
      this.$store.dispatch("concert/addConcert");
      this.$router.push(`concert/add-concert`);
    },
    deleteConcert(id) {
      this.$store.dispatch("concert/deleteConcert", id);
      this.$router.push(`concert/`);
    }
  },
  beforeCreate() {
    this.$store.dispatch("concert/setup", this.$router);
  }
};
</script>
<style lang="scss" scoped>
#concert-view {
  border: 1px solid yellow;
  .concert-details-link {
    background: #05a6a6;
    color: white;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: adjust-hue($color: #05a6f6, $degrees: -15);
      color: adjust-hue($color: rgb(253, 129, 5), $degrees: -45);
    }
    &.cancelled {
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
    &.requested {
      color: #00ffff;
      background: rgba(255, 166, 0, 0.308);
    }
  }
}
</style>

