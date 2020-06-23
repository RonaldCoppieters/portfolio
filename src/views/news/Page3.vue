<template>
  <v-container class="news">
    <NewsBanner page="3" />
    <h2>
      Developer creates own chat application to garantee his privacy
    </h2>
    <v-row>
      <v-col cols="12" sm="6">
        <p>
          A student at the university-college PXL named Ronald Coppieters had
          sent an email to the commercial website bol.com asking if he could use
          their Open API for one of his school projects. As for his reasons, he
          stated: "My aim was to use the data to make all sorts of deductions.
          What kind of products are being bought the most. What do people
          estimate a certain type of product is worth and so forth.", however,
          Bol declined to provide him with an API key because this service is
          only intended to be used by commercial partners. "I wasn't selling
          anything, so they weren't buying my story", the sophomore joked. Bol
          has refused to comment at this time.
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <p>
          Instead of giving up and setting his sights on another subject of
          study, he decided to code a webcrawler, sometimes also referred to as
          a spider or spiderbot. "If they're not giving me their data, I'll just
          take it instead. It's not like there's anything stopping me. It's
          right there on their website, publicly available.", he boldly stated,
          seemingly unconcerned with the legality of his actions. "Web scraping
          isn't illegal, unless you plan to use the information to do something
          unethical, which I wasn't. It's really just a nuisance for websites,
          because it can create a lot of web traffic."
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-0">
      <v-col cols="12" sm="4">
        <div class="border-right pr-3">
          <p>
            The rebellious student did have to quit midway through given that he
            was pressed for time. "I wanted to finish my school assigment within
            a week, but it would take me that amount just to pull all the data
            from the site. And then I'd still have to analyze it, which is a
            whole other beast. I reached the conclusion that this brute-force
            method of doing things just wasn't worth my time and effort and
            instead I just pulled a data set from kaggle.com and used that. It
            was a lot of fun to code, so there's that."
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <div class="border-right pr-3">
          <p>
            When we asked about the tools he used, we were told the following:
            "You don't need a whole lot of tools. All I used was Python and the
            Beautiful Soup plugin, which specializes in this sort of thing. The
            reason it's so easy is because html pages are inherently very
            organized. Everything is neatly categorized with tags and
            classnames, so really it's just about defining the data that's
            important to you. Then you just parse the text and encode it into
            whatever format you want, like json."
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <div>
          <p>
            Ronald was more than happy to provide us with some sample
            <a
              href="https://firebasestorage.googleapis.com/v0/b/ronald-coppieters.appspot.com/o/public%2Fbol-book-data.json?alt=media&token=3324b8d2-7b95-4e03-8226-35467cf2984e"
              >json data</a
            >
            that he had acquired. We were given the result of 20 pages of data
            out of 200 pages that were scraped from the book products category.
            He also promised to make his code open-source on
            <a href="https://github.com/RonaldCoppieters/WebCrawlerDemo"
              >Github</a
            >, incase any other students are ever put in a similar situation.
          </p>
          <h6>
            Return to the <router-link to="/news/1">main page</router-link>
          </h6>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsBanner from "@/components/NewsBanner.vue";

@Component({
  name: "News3",
  components: {
    NewsBanner
  }
})
export default class News3 extends Vue {}
</script>

<style lang="scss" scoped>
.border-right {
  border-right: 1px solid black;
}
</style>
