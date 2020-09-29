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
        primary: "#e8c3d4",
        // background: '#f7dfdf',
        accent: "#D9326B",
        secondary: "#faefdc",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }
});
