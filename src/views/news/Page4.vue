<template>
  <v-container class="news">
    <NewsBanner page="4" />
    <h2>
      Java developer creates Rest API because he's fed up with hospital's strict
      yet poorly managed visitor policy
    </h2>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          Many hospitals have adopted a series of strict guidelines due to the
          alarming spread of Covid-19. Vesalius, a medical institution based in
          Tongeren is certainly no exception. In fact, their visitor
          restrictions have been much more meticulous than most. Their guidlines
          dictate that no more than 2 visitors may visit a division within a
          10-minute time interval. A sensible rule, but the problem was that
          visitors werent able to make any kind of reservation. Peter
          Grymonprez, head of service at Vesalius commented: "It would be
          problematic if everyone started to call in every time they wanted to
          visit, as it would clog up the lines."
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <p>
          This predicament has caused much frustration amongst visitors, since
          they have no way of knowing if they'll be allowed inside the building
          until they arrive. One of those irritated visitors, who is also an
          experienced Java Developer, had this to say: "Sometimes there's a
          whole line of visitors waiting outside. There were moments where I was
          waiting for up to 2 hours until my turn finally came. I took it upon
          myself to come up with a solution. An automated system people could
          use to announce their visit. That way reception won't have to deal
          with any phone calls."
        </p></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          The solution took the form of a Rest API made with Spring Boot and
          Hibernate. "Visitors can now make reservations at the press of a
          button.", the coder says, "No more waiting in line."
        </p>
        <p>
          The good samaritan also included many unit test in his application to
          ensure that everything would work as intended. He used JUnit and
          Mockito to ensure that there would be no tight coupling between his
          business layer and data layer.
        </p>
        <p>
          The project can be viewed on
          <a href="https://github.com/RonaldCoppieters/VisitorAppDemo">Github</a
          >.
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          class="image mb-5"
          src="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fvisitor-app-servlet.png?alt=media&token=470a4e66-74f8-4325-a707-5e572b1db810"
        />
        <h3 class="text-right">
          Return to the <router-link to="/news/1">main page</router-link>
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsBanner from "@/components/NewsBanner.vue";

@Component({
  name: "News4",
  components: {
    NewsBanner
  }
})
export default class News4 extends Vue {}
</script>
