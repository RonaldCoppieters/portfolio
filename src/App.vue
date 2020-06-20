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

.v-application {
  background-color: var(--v-background-base) !important;
}

h1 {
  font-family: "Playfair Display", serif;
}
</style>
