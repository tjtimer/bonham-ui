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
@import '../../assets/colors';

@keyframes random {
  0%, 100% {
    left: 50%;
    background: rgba($warning, 1);
  }
  25% {
    left: 120%;
    background: rgba($error, 0);
  }
  50% {
    left: 0;
    background: rgba($secondary, 1);
  }
  75% {
    left: 75%;
    background: rgba($primary, 0);
  }
}
@keyframes random2 {
  0%, 100% {
    left: 25%;
    width: 50px;
    height: 50px;
    background: rgba($info, 1);
  }
  33% {
    left: calc(-100% - 46px);
    width: 10px;
    height: 10px;
    background: rgba($primary, 0);
  }
  66% {
    left: 0;
    width: 35px;
    height: 60px;
    background: rgba($error, 1);
  }
}
@keyframes random3 {
  0%, 100% {
    left: 90%;
    width: 10px;
    height: 10px;
    background: rgba($primary, 1);
  }
  50% {
    left: 0%;
    width: 50px;
    height: 50px;
    background: rgba($warning, 0);
  }
  75% {
    left: 10%;
    width: 75px;
    height: 20px;
    background: rgba($error, 1);
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
  background: rgba($secondary, 0.3);
  border-radius: 50%;
  text-indent: -99999px;
  overflow: visible;
}
.random {
  .point-1 {
    animation: random3 2.7s ease-in-out 0s infinite alternate;
  }
  .point-2 {
    animation: random2 5s ease-in 0.4s infinite alternate,
    random3 2s ease-in-out 0s infinite alternate;
  }
  .point-3 {
    animation: random3 3.5s ease-in-out 0.5s infinite alternate,
    random2 2.7s ease-in-out 0s infinite alternate;
  }
  .point-4 {
    animation: random 4.3s ease-in-out 0s infinite alternate,
    random 2.3s ease-out 0.1s infinite alternate;
  }
}
</style>
