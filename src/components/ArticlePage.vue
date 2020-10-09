<template>
  <v-row no-gutters>
    <v-col>
      <v-img
        contain
        class="white--text ma-0 pa-0"
        max-height="300"
        :src="selectedArticle.img"
      />
      <v-card
        :style="$vuetify.breakpoint.smAndDown ? '' : ''"
        :class="$vuetify.breakpoint.lgAndUp ? '' : ''"
        class="pt-0"
        flat
        max-width="1200"
      >
        <!-- <v-img
          contain
          class="white--text "
          max-height="400"
          :src="selectedArticle.img"
        /> -->
        <v-card-title class="text-h5 justify-center">
          {{ selectedArticle.headline }}
        </v-card-title>
        <v-card-subtitle class="text-right">
          {{ selectedArticle.description }}
        </v-card-subtitle>
        <v-divider />
        <v-row dense align="start" justify="start">
          <v-col cols="sm-12">
            <v-card-subtitle class="font-weight-bold text-right mr-2 pa-0">
              מצרכים
            </v-card-subtitle>
          </v-col>
        </v-row>

        <div
          v-for="(item, i) in selectedArticle.igredients"
          :key="i"
          class="mb-2"
        >
          <v-card-text class="text-right mb-1 pb-0 mt-0 pt-0">{{
            item.title
          }}</v-card-text>
          <v-card-text class="mr-10 pa-0">
            <ul>
              <li
                v-for="(subIgredient, j) in item.subIgredients"
                :key="j"
                class="text-right"
              >
                {{ subIgredient }}
              </li>
            </ul>
          </v-card-text>
        </div>
        <br />
        <v-card-subtitle class="font-weight-bold text-right mr-2 pa-0">
          אופן הכנה
        </v-card-subtitle>
        <div
          v-for="(item, i) in selectedArticle.preperation"
          :key="i"
          class="mb-2"
        >
          <v-card-text class="text-right mb-1 pb-0 mt-0 pt-0">
            {{ item.title }}
          </v-card-text>
          <v-card-text class="mr-8 pa-0 ">
            <ol>
              <li
                v-for="(subItem, j) in item.steps"
                :key="j"
                class="text-right"
              >
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
import { db } from "@/firebase/firebaseAPI";
export default {
  data: () => ({
    styleObject: { border: "1px solid #d9be9e" },
    selectedArticle: {},
    mockData: []
  }),

  mounted() {
    db.collection("recipes")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        this.selectedArticle = snapshot.data();
      });
  }
};
</script>
