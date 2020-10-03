<template>
  <v-row>
    <v-col v-for="article in mockData" :key="article.headline" cols="lg-4">
      <Article :article="article" />
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Article from "@/components/Article";
import { db } from "@/firebase/db";
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
