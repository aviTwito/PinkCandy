<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.headline"
            placeholder="כותרת"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.subHeader"
            placeholder="תת כותרת"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    article: {
      headline: "",
      img: require("@/assets/test.jpg"),
      content: "",
      subHeader: "",
      description: "",

      igredients: [],
      preperation: []
    }
  })
};
</script>
