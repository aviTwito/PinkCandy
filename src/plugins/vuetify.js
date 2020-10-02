import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        // background: '#d9be9e',
        // primary: '#f7c1d9',
        primary: "#ffe0f7",
        // background: '#f7dfdf',
        secondary: "#fe91ca",
        accent: "#d3dbff",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }
});
