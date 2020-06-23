<template>
  <v-container class="news">
    <h1>Programmer Insight</h1>
    <NewsBanner page="1" />
    <h2>
      Twenty-nine year old man spends too much time coding; no plans to stop
    </h2>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          Sometimes, people land themselves in an uncommon situation where
          coding can be used for both work and personal situations. Well, a
          young full-stack developer named Ronald Coppieters was spending many
          hours a day preoccupied with programming.
        </p>
        <p>
          The developer clarified, "I don't see myself stopping anytime soon. It
          has so many uses that I can't avoid it. It just makes sense as it is
          more efficient."
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <p>
          The biggest issue, he said, is that he would hop on his laptop for a
          project, but would get distracted by projects made by others in the
          community for unexpectedly long periods of time, which then causes him
          to spend even more time emersed in code.
        </p>
        <p>
          "I mean, that's terrible right?" he asked. "But I just can't help it.
          There are so many interesting languages and technologies out there, I
          just want to explore all of it."
        </p>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12" sm="6">
        <section class="pa-3">
          <h3 class="mb-2">
            Developer creates own chat application to garantee his privacy
          </h3>
          <p>
            An ambitious programmer from Sint-Truiden used the following
            technologies to built the app:
          </p>
          <ul class="mb-2">
            <li>
              Frontend: JavaScript using VueJS, Vuex, Vuetify. The Crypto
              library for almost all encrypted traffic.
            </li>
            <li>Backend: Dotnet core ASP.NET using SignalR.</li>
            <li>
              Other services: Twilio for 2-factor authentication. Firebase Auth
              for OAuth 2.0 authentication. The Google Firestore Database.
              LetsEncrypt to request a TSL certificate for the server. No-Ip for
              Dynamic DNS resolution.
            </li>
          </ul>
          <p>
            His chat <a>site</a> is currently online for others to use. His code
            for the
            <a href="https://github.com/RonaldCoppieters/SecureChatApp_Frontend"
              >frontend</a
            >
            and
            <a href="https://github.com/RonaldCoppieters/SecureChatApp_Backend"
              >backend</a
            >
            is also avaiable on Github.
          </p>
          <h6 class="text-right">
            Read more about it on
            <router-link to="/news/2">page 2</router-link>
          </h6>
        </section>
      </v-col>
      <v-col cols="12" sm="6">
        <section class="pa-3 mb-3">
          <h3 class="mb-2">
            Bol.com doesn't let student use their API so he creates a webcrawler
            to steal their data
          </h3>
          <p>
            A student wanted to use the bol.com API for a school project, but
            Bol refused to give him an API key. He decided to take matters into
            his own hands using Python and the Beautiful Soup plugin.
          </p>
          <h6 class="text-right">
            Read more about it on <router-link to="/news/3">page 3</router-link>
          </h6>
        </section>
        <v-img
          class="image"
          src="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fvintage-pc3.jpg?alt=media&token=7da36660-c7c6-4333-9ff3-a6f487911d88"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsBanner from "@/components/NewsBanner.vue";

@Component({
  name: "News1",
  components: {
    NewsBanner
  }
})
export default class News1 extends Vue {}
</script>
