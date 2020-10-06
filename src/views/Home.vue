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
  computed: {},
  firestore: {
    mockData: db.collection("recipes")
  }
};
</script>
