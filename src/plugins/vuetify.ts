import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        background: "#f9f7f1"
      }
    },
    options: {
      customProperties: true
    }
  }
});
