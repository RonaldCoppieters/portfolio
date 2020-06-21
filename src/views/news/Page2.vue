<template>
  <v-container class="news">
    <NewsBanner page="2" />
    <h2>
      Developer creates own chat application to garantee his privacy
    </h2>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          One of the biggest concerns around secure chat applications from a
          privacy perspective is their opacity. Many apps like WhatsApp won't
          offer specifics on how it works with law enforcement. This was enough
          to incite paranoia in an ambitious full-stack developer, who developed
          his own secure chat application to know for sure that his
          conversations wouldn't get shared with third parties. "Just because
          they say your information is secure and that they won't share anything
          doesn't mean it's true.", he says. "There have been many cases where
          information was made public in a court of law."
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <p>
          The skeptic coder wants to remain as transparent as possible with his
          users, which is why all of his work will be made public. "Users need
          to be able to verify that their information is safe, otherwise we
          might as well assume the worst case scenario, which is that it
          isn't.", he commented. "The site will store no user information. The
          only thing stored in the database are the encrypted messages. Even the
          encryption keys will be saved locally, so that they can't be used by
          anyone but the user to decrypt the messages."
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
              The Secure Chat Application was built using VueJS for the
              frontend, Dotnet core ASP.NET for the backend rest interface and
              integrating the Google Firestore as his database. It appears like
              the programmer went of his way to make things harder on himself,
              as he could've just used Dotnet MVC with Entity Framework and
              razor pages to get a Full-Stack all-in-one deal utilizing the same
              platform. When we brought it up he had this to say: "That's true,
              but the whole point was to make it challenging and increase the
              scope. A lot of big companies are moving away from the classic MVC
              structure and more often incorperate an architecture using many
              microservices instead. The Google Firestore is plenty secure and
              Google Firebase can make life easier in other ways as well, like
              authenticating users. This modular way of building made it easy to
              select exactly what I needed without worrying too much about the
              logic behind every layer of my application. Why reinvent the wheel
              when other people have done it for you?"
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
              they should. Files can also be transfered securely. Keys are
              stored decentralized using an indexedDB. All-in-all I'm quite
              satisfied with the end result. Looking back, my REST controllers
              could've been more restful and on the frontend side I should've
              used components (or partials) to make my code more readable. Other
              than that it has pretty much everything you'd want to chat with
              other people without worrying about prying eyes."
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
          Of course we were very interested in what technologies were applied.
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
          The <a href="https://secu-chatapp.firebaseapp.com/">site</a> is
          currently online for others to demo. All code for the
          <a href="https://github.com/RonaldCoppieters/SecureChatApp_Frontend"
            >frontend</a
          >
          and the
          <a href="https://github.com/RonaldCoppieters/SecureChatApp_Backend"
            >backend</a
          >
          can also be reviewed on his Github page. On a closing note, the
          creator mentioned the following: "I would be more than happy for
          others to review my code. With this project I was able to apply all of
          the knowledge about code I have attained so far. I had a lot of fun
          making the site and I learned a lot of new things, like CORS and how
          to provide realtime functionality."
        </p>
        <v-row justify="end" class="mr-5">
          <h6>
            Return to the <router-link to="/news/1">main page</router-link>
          </h6>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsBanner from "@/components/NewsBanner.vue";

@Component({
  name: "News2",
  components: {
    NewsBanner
  }
})
export default class News2 extends Vue {}
</script>

<style lang="scss" scoped>
h2 {
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

@media screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
