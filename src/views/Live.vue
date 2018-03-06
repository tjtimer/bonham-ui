<template lang="pug">
  #live
    h1 live
    ul.column.upcoming
      li(v-for="item, index in live.concerts")
        a.concert-details-link(@click.prevent="showConcertDetails(index)" :key="index")
          ul.row.concert(:class="item.cancelled ? 'cancelled' : ''")
            li.date 
              p {{ item.date }}
            li.venue
              p {{ item.venue }} {{ item.city }}
            li.info
              p {{ item.info }}
      li.add-item
        a.concert-add-link(@click.prevent="addConcert")
          p add a new show
    router-view.concert-detail
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "live",
  components: {},
  computed: {
    ...mapState(["live"])
  },
  methods: {
    showConcertDetails: function(index) {
      const next = this.live.concerts[index]
      this.$store.dispatch('live/setCurrentActive', index)
      this.$router.push(`live/${next.date}-${next.value}`)
    },
    addConcert: function() {
      this.$store.dispatch('live/setCurrentActive', null)
      this.$router.push(`live/add-concert`)
    }
  }
};
</script>
<style lang="scss" scoped>
#live {
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

