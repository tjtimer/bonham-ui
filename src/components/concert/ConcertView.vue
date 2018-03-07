<template lang="pug">
  #concert-view
    h1 concert
    ul.column.upcoming
      li(v-for="concert, index in concert.concerts")
        a.concert-details-link(@click.prevent="showConcertDetails(index)")
          ul.row.concert(:class="concert.cancelled ? 'cancelled' : ''")
            li.date 
              p {{ concert.date }}
            li.venue
              p {{ concert.venue }} {{ concert.city }}
            li.info
              p {{ concert.info }}
        button(type="button" @click="deleteConcert(index)")
          delete-icon
      li.add-concert
        a.concert-add-link(@click.prevent="addConcert")
          p add a new show
    router-view.concert-detail
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Delete } from "vue-feather-icon";
export default {
  name: "concert-view",
  components: { "delete-icon": Delete },
  computed: {
    ...mapState(["concert"])
  },
  methods: {
    showConcertDetails: function(index) {
      const next = this.concert.concerts[index];
      this.$store.dispatch("concert/init", index);
      this.$router.push(`concert/${next.date}-${next.value}`);
    },
    addConcert: function() {
      this.$store.dispatch("concert/init", null);
      this.$router.push(`concert/add-concert`);
    },
    deleteConcert: function(id) {
      this.$store.dispatch("concert/delete", id);
      this.$router.push(`concert/`);
    }
  },
  created() {
    this.$store.dispatch("concert/init");
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

