<template>
  <div id="app">
    <b-container>
      <products msg="Welcome to Fire-Code" />
    </b-container>
  </div>
</template>

<script>
import Products from "./components/products.vue";

export default {
  name: "App",
  components: {
    Products,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
