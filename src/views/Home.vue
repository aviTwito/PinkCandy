<template>
  <v-row>
    <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12">
      <v-img
        contain
        height="220"
        :src="
          require('@/assets/AppLogo/d165615c-1851-418c-bdce-1eebea92a0a7_200x200.png')
        "
      >
      </v-img>
    </v-col>
    <v-col
      v-for="article in mockData"
      :key="article.headline"
      :cols="getCols(article)"
      sm="3"
      lg="4"
    >
      <Article :article="article" />
    </v-col>
  </v-row>
</template>

<script>
import Article from "@/components/Article";
import { db } from "@/firebase/firebaseAPI";
export default {
  name: "Home",
  components: {
    Article
  },
  data: () => ({
    mockData: []
  }),
  methods: {
    getCols(article) {
      if (this.$vuetify.breakpoint.lgAndUp || article.favorite) {
        return "12";
      }
      return "6";
    }
  },

  firestore: {
    mockData: db.collection("recipes")
  }
};
</script>
