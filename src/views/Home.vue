<template>
  <v-row>
    <v-col cols="lg-3" v-for="article in mockData" :key="article.headline">
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
