<template lang="pug">
  #live
    h1 live
    ul.column.upcoming
      li(v-for="item, index in concerts")
        ul.row.concert
          li.date 
            p {{ item.date }}
          li.venue
            a.venue-link(:href="item.venue") {{ item.venue }} {{ item.city }}
          li.info
            p {{ item.info }}
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
          info: "special guest: Operators"
        },
        {
          date: "02.04.2018",
          venue: "Astrastube",
          city: "Hamburg",
          info: "special guest: Operators"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#live {
  border: 1px solid yellow;
}
</style>

