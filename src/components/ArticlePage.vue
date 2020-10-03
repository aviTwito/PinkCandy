<template>
  <v-row no-gutters>
    <v-col>
      <v-card
        :style="$vuetify.breakpoint.smAndDown ? '' : ''"
        :class="$vuetify.breakpoint.lgAndUp ? '' : ''"
        class="pt-0"
        flat
        max-width="1200"
      >
        <v-img
          contain
          class="white--text "
          max-height="400"
          :src="selectedArticle.img"
        />
        <v-card-title class="text-h5 justify-center">
          {{ selectedArticle.headline }}
        </v-card-title>
        <v-card-text>
          {{ selectedArticle.description }}
        </v-card-text>
        <v-divider />
        <v-card-subtitle
          class="text-right font-weight-bold pb-1 pr-0 mr-1 pt-2"
        >
          מצרכים
        </v-card-subtitle>

        <v-card-text>
          <ul>
            <v-row v-for="(item, i) in selectedArticle.igredients" :key="i">
              <li class="mr-10">
                {{ item }}
              </li>
            </v-row>
          </ul>
        </v-card-text>

        <v-card-subtitle
          class=" text-right font-weight-bold pb-1 pr-0 mr-0 pt-2"
        >
          אופן הכנה
        </v-card-subtitle>
        <v-card-text class="mr-8">
          <ol>
            <v-row v-for="(item, i) in selectedArticle.preperation" :key="i">
              <li>
                {{ item.text }}
              </li>
              <v-img
                v-if="item.img"
                class="white--text align-end mt-2 mb-2 "
                max-height="400"
                :src="selectedArticle.img"
              />
            </v-row>
          </ol>
        </v-card-text>
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
