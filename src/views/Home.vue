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
              <v-btn outlined @click="gotoNews"
                >View my work
                <v-icon class="ml-3">mdi-forward</v-icon>
              </v-btn>
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
export default class Home extends Vue {
  gotoNews() {
    this.$router.push({ name: "News" });
  }
}
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 64px);
  overflow: hidden;
}
</style>
