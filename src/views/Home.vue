<template>
  <v-row>
    <v-col
      v-for="article in mockData"
      :key="article.headline"
      :cols="$vuetify.breakpoint.lgAndUp ? '12' : '6'"
      sm="3"
      lg="4"
    >
      <Article :article="article" />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Article from "@/components/Article";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Article
  },
  data: () => ({}),
  computed: {
    ...mapState(["mockData"])
  }
};
</script>
