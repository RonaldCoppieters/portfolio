<template>
  <v-container class="home">
    <v-row justify="center">
      <v-col cols="8">
        <v-row align="center" justify="center" class="full-height">
          <div>
            <h1 class="mx-5 my-0">
              Hello. My name is Ronald Coppieters. <br />
              I'm a full-stack developer.
            </h1>
            <v-row justify="center" class="mt-5">
              <router-link to="/news/1"
                ><v-btn outlined
                  >View my work
                  <v-icon class="ml-3">mdi-forward</v-icon>
                </v-btn></router-link
              >
            </v-row>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home"
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 64px);
  overflow: hidden;
}

a {
  text-decoration: none;
}
</style>
