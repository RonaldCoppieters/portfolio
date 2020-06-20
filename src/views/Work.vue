<template>
  <v-container class="work">
    <h1 class="text-center my-5">Here are some of the projects i made.</h1>
    <v-row justify="center">
      <v-col cols="12" sm="4" md="2">
        <ParallaxDepthCard
          data-image="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fcard_bg_chat_small.png?alt=media&token=398fd93f-77f8-4087-9b16-9834d4f0f22d"
        >
          <h1 slot="header">Chat App</h1>
          <p slot="content">
            A secure chat app similar to 'WhatsApp'. The main focus was
            security.
          </p>
        </ParallaxDepthCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParallaxDepthCard from "@/components/ParallaxDepthCard.vue";

@Component({
  name: "Work",
  components: {
    ParallaxDepthCard
  }
})
export default class Work extends Vue {}
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 64px);
  overflow: hidden;
}
</style>
