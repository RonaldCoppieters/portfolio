<template>
  <div>
    <v-divider class="thick mb-1" />
    <v-divider class="light" />
    <v-row class="text-center" justify="space-around">
      <v-col cols="12" sm="3">
        <p class="my-0">ISSUE #1</p>
      </v-col>
      <v-col cols="12" sm="3">
        <p class="my-0" v-text="today()"></p>
      </v-col>
      <v-col cols="12" sm="3">
        <p class="my-0">PAGE {{ page }}</p>
      </v-col>
    </v-row>
    <v-divider class="light" />
    <v-divider class="thick mt-1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";

@Component({
  name: "NewsBanner"
})
export default class NewsBanner extends Vue {
  @Prop({ default: "NA" }) page?: string;

  today(): string {
    return dayjs()
      .format("dddd, MMMM D, YYYY")
      .toUpperCase();
  }
}
</script>
