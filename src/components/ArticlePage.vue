<template>
  <v-row no-gutters>
    <v-col md="8" offset-md="2" sm="8" offset-sm="2">
      <v-card
        :style="$vuetify.breakpoint.smAndDown ? styleObject : ''"
        :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-2'"
        class="pa-2 pt-0"
        outlined
        max-width="1200"
      >
        <v-card-title class="text-h5 justify-center">
          {{ selectedArticle.headline }}
        </v-card-title>
        <v-img
          class="white--text align-end ma-2"
          max-height="400"
          :src="selectedArticle.img"
        />
        <v-card-text>
          {{ selectedArticle.description }}
        </v-card-text>
        <v-divider />
        <v-row dense align="start" justify="start">
          <v-col cols="sm-12">
            <v-card-subtitle class="font-weight-bold mr-2 pa-0">
              מצרכים
            </v-card-subtitle>
          </v-col>
        </v-row>

        <div v-for="(item, i) in selectedArticle.igredients" :key="i">
          <v-card-text>{{ item.title }}</v-card-text>
          <v-card-text class="mr-3 pa-0">
            <ul>
              <li v-for="(subIgredient, j) in item.subIgredients" :key="j">
                {{ subIgredient }}
              </li>
            </ul>
          </v-card-text>
        </div>
        <br />
        <v-card-subtitle class="font-weight-bold pb-1 pr-0 mr-0 pt-2">
          אופן הכנה
        </v-card-subtitle>
        <div v-for="(item, i) in selectedArticle.preperation" :key="i">
          <v-card-subtitle>
            {{ item.title }}
          </v-card-subtitle>
          <v-card-text class="mr-3">
            <ol>
              <li v-for="(subItem, j) in item.steps" :key="j">
                {{ subItem.text }}
                <v-img
                  v-if="subItem.img"
                  class="white--text align-end mt-2 mb-2"
                  max-height="400"
                  :src="selectedArticle.img"
                />
              </li>
            </ol>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    // id: this.$route.params.id,
    styleObject: { border: "1px solid #d9be9e" },
    selectedArticle: {}
  }),
  computed: {
    ...mapState(["mockData"])
  },
  mounted() {
    const temp = this.mockData.find(article => {
      return article.id === this.$route.params.id;
    });
    this.selectedArticle = temp;
  }
};
</script>
