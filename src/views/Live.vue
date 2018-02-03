<template lang="pug">
  #live
    h1 live
    ul.column.upcoming
      li(v-for="item, index in concerts")
        router-link.concert-details-link(:to="`${item.date}-${item.venue}`" append)
          ul.row.concert(:class="item.cancelled ? 'cancelled' : ''")
            li.date 
              p {{ item.date }}
            li.venue
              p {{ item.venue }} {{ item.city }}
            li.info
              p {{ item.info }}
    router-view.overlay
</template>
<script>
export default {
  name: "live",
  data() {
    return {
      concerts: [
        {
          date: "01.04.2018",
          venue: "Jägerklause",
          city: "Berlin",
          info: "special guest: Operators",
          cancelled: false
        },
        {
          date: "02.04.2018",
          venue: "Astrastube",
          city: "Hamburg",
          info: "special guest: Operators",
          cancelled: false
        },
        {
          date: "03.04.2018",
          venue: "Medusa",
          city: "Kiel",
          info: "special guest: Operators",
          cancelled: true
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#live {
  border: 1px solid yellow;
  .concert-details-link {
    background: rgba(100, 100, 120, 0.4);
    cursor: pointer;
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
        background: rgba(#666, 0.75);
        text-transform: uppercase;
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>

