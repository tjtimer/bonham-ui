<template lang="pug">
  div(class="loading-indicator" :class="animationType")
    div(class="point-1") o
    div(class="point-2") o
    div(class="point-3") o
    div(class="point-4") o
</template>
<script>
export default {
  name: 'loading-indicator',
  props: ['animationType']
}
</script>
<style lang="scss" scoped>
@import '../../assets/helpers/_variables';

@keyframes random {
  0%, 100% {
    left: 50%;
    background: rgba($blue-light, 1);
  }
  25% {
    left: 120%;
    background: rgba($red-light, 0);
  }
  50% {
    left: 0;
    background: rgba($yellow-light, 1);
  }
  75% {
    left: 75%;
    background: rgba($green-light, 0);
  }
}
@keyframes random2 {
  0%, 100% {
    left: 25%;
    width: 50px;
    height: 50px;
    background: rgba($green-light, 1);
  }
  33% {
    left: calc(-100% - 46px);
    width: 10px;
    height: 10px;
    background: rgba($red-light, 0);
  }
  66% {
    left: 0;
    width: 35px;
    height: 60px;
    background: rgba($blue-light, 1);
  }
}
@keyframes random3 {
  0%, 100% {
    left: 90%;
    width: 10px;
    height: 10px;
    background: rgba($red-light, 1);
  }
  50% {
    left: 0%;
    width: 50px;
    height: 50px;
    background: rgba($blue-light, 0);
  }
  75% {
    left: 10%;
    width: 75px;
    height: 20px;
    background: rgba($yellow-light, 1);
  }
}

.loading-indicator {
  position: relative;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  flex: 1 3 15%;
  height: 100%;
}
[class*="point-"] {
  position: absolute;
  display: inline-block;
  width: 45px;
  height: 45px;
  background: rgba($red-light, 0.3);
  border-radius: 50%;
  text-indent: -99999px;
  overflow: visible;
}
.random {
  .point-1 {
    animation: random1 2.7s ease-in-out 0s infinite alternate;
  }
  .point-2 {
    animation: random2 5s ease-in 0.2s infinite alternate;
  }
  .point-3 {
    animation: random3 3.5s ease-in-out 0.4s infinite alternate;
  }
  .point-4 {
    animation: random 4.3s ease-in-out 0.6s infinite alternate;
  }
}
</style>
