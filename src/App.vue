<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "EB Garamond", serif;
}

.image {
  border: black solid 1px;
}

.image,
a {
  transition: all 1s ease;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  text-decoration: underline;
}

.image:hover,
a:hover {
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
}

.text-caption {
  font-family: "Playfair Display", serif !important;
}

.news {
  max-width: 960px !important;
}

.v-application {
  background-color: var(--v-background-base) !important;
}

h1 {
  font-family: "Playfair Display", serif;
}

h2,
h3 {
  font-family: "Playfair Display", serif;
  font-style: italic;
}
</style>
