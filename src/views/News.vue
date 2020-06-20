<template>
  <v-container class="news">
    <h1>Programmer Insight</h1>
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
        <p class="my-0">VUEJS EDITION</p>
      </v-col>
    </v-row>
    <v-divider class="light" />
    <v-divider class="thick mt-1" />
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
          The developer, whose work includes a Secure Chat Application,
          clarified, "I don't see myself stopping anytime soon. It has so many
          uses that I can't avoid it. It just makes sense as it is more
          efficient."
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
    <v-row class="mb-0">
      <v-col>
        <h3 class="mb-5">
          "The main theme I had in mind was mainly security."
        </h3>
        <v-row>
          <v-col cols="12" sm="6">
            <p>
              Ronald had made a Secure Chat Application using VueJS for the
              frontend, Dotnet core ASP.NET for the backend rest interface and
              integrating the Google Firestore as his database. It appears like
              he went of his way to make things harder on himself, as he
              could've just used Dotnet MVC with Entity Framework and razor
              pages to get a Full-Stack all-in-one deal utilizing the same
              platform. The programmer commented, "That's true, but the whole
              point was to make it challenging and increase the scope. A lot of
              big companies are moving away from the classic MVC structure and
              more often incorperate an architecture using many microservices
              instead. The Google Firestore is plenty secure and Google Firebase
              can make life easier in other ways as well, like authenticating
              users. This modular way of building made it easy to select exactly
              what I needed without worrying too much about the logic behind
              every layer of my application. Why reinvent the wheel when other
              people have done it for you?"
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <p>
              While inspecting the website we couldn't help but notice that a
              lot of features that you'd expect from a chat application were
              still missing, such as setting your chat status to Online, Away,
              etc. "I know, I know, but that wasn't the point.", the eager coder
              explained. "The main theme I had in mind was mainly security.
              WhatsApp was my source of inspiration, that's why the thing is
              centered around End-to-End encryption. The application uses an
              Elliptic-Curve Diffie-Hellman protocol to exchange keys between
              users. The chat messages themselves are encrypted using AES256, as
              they should. Files can also be transfered securely. All-in-all I'm
              quite satisfied with the end result. Looking back, my REST
              controllers could've been more restful and at the frontend side I
              should've used components (or partials) to make my code more
              readable. Other than that it has pretty much everything you'd want
              to chat with other people without worrying about prying eyes."
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          class="image mb-2"
          src="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fchatapp_lobby.png?alt=media&token=8810cb99-0c38-4f4d-82e9-775bc4d6117d"
          alt="Secure Chat App Lobby"
        ></v-img>
        <v-img
          class="image"
          src="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fchatapp_friendlist.png?alt=media&token=283284ea-b68b-4cf4-807a-eec285f4efd4"
          alt="Secure Chat App Friendlist"
        ></v-img>
        <p class="text-caption font-italic">
          A secure chat application, using End-to-End encryption
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          Of course we were very interested in what technologies Ronald applied.
          The following list was the result of our query:
        </p>
        <ul>
          <li>
            Frontend: JavaScript using VueJS, Vuex, Vuetify. The Crypto library
            for almost all encrypted traffic.
          </li>
          <li>Backend: Dotnet core ASP.NET using SignalR.</li>
          <li>
            Other services: Twilio for 2-factor authentication. Firebase Auth
            for OAuth 2.0 authentication. The Google Firestore Database.
            LetsEncrypt to request a TSL certificate for the server. No-Ip for
            Dynamic DNS resolution.
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="6">
        <p>
          The <a href="https://secu-chatapp.firebaseapp.com/">site</a> is online
          for others to demo. All code for the
          <a href="https://github.com/RonaldCoppieters/SecureChatApp_Frontend"
            >frontend</a
          >
          and the
          <a href="https://github.com/RonaldCoppieters/SecureChatApp_Backend"
            >backend</a
          >
          can also be reviewed on his Github page.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dayjs from "dayjs";

@Component({
  name: "News"
})
export default class News extends Vue {
  today(): string {
    return dayjs()
      .format("dddd, MMMM D, YYYY")
      .toUpperCase();
  }
}
</script>

<style lang="scss" scoped>
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
  max-width: 960px;
}

h1 {
  text-align: center;
  font-weight: 900;
  font-size: 5rem;
}

h2 {
  font-weight: 600;
  font-size: 3rem;
}

h2,
h3 {
  font-family: "Playfair Display", serif;
  font-style: italic;
}

hr.light {
  border-top: 1px solid black !important;
}
hr.thick {
  border-top: 2px solid black !important;
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
