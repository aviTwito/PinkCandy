<template>
  <v-container
    fluid
    :class="[
      {
        'pa-0': $vuetify.breakpoint.mdAndUp,
        'ma-0': $vuetify.breakpoint.mdAndUp
      }
    ]"
  >
    <v-layout row>
      <v-flex
        v-for="article in mockData2"
        :key="article.headline"
        lg3
        sm12
        :class="[
          {
            'ma-2': $vuetify.breakpoint.mdAndUp,
            'ma-1': $vuetify.breakpoint.smAndDown,
            'mx-center': $vuetify.breakpoint.smAndDown
          }
        ]"
      >
        <Article :article="article" />
      </v-flex>
    </v-layout>
  </v-container>
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
    ...mapState(["mockData2"])
  }
};
</script>
