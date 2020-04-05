<template>
  <div id="app">
    <root/>
  </div>
</template>

<script>
import Root from "./components/Root";

export default {
  name: "App",
  components: {
    Root,
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
