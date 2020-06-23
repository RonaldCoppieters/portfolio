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
  text-align: center;
  font-weight: 900;
  font-size: 5rem;
}

h2 {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 600;
  font-size: 3rem;
}

h6 {
  font-size: 1.2rem;
}

hr.light {
  border-top: 1px solid black !important;
}
hr.thick {
  border-top: 2px solid black !important;
}

section {
  border: black 1px solid;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
