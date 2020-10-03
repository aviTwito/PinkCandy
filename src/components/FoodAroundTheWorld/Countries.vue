<template>
  <v-row>
    <v-col
      v-for="(item, index) in mockData"
      :key="index"
      :cols="$vuetify.breakpoint.lgAndUp ? '12' : '6'"
      lg="4"
      sm="3"
    >
      <v-card @click="navigateToCountrie">
        <v-img
          class="white--text align-end"
          max-height="400"
          gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.4)"
          :src="item.img"
        >
          <v-card-title
            class="header text-center text-bold"
            v-text="item.name"
          ></v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    mockData: [
      {
        name: "פראג",
        img: require("@/assets/test.jpg")
      },
      {
        name: "סין",
        img: require("@/assets/test.jpg")
      },
      {
        name: "יפן",
        img: require("@/assets/test.jpg")
      },
      {
        name: "הונגריה",
        img: require("@/assets/test.jpg")
      },
      {
        name: "יוון",
        img: require("@/assets/test.jpg")
      }
    ]
  }),
  methods: {
    navigateToCountrie() {
      this.$router.push({ path: `/counries-articles` });
    }
  }
};
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    transparent 72px
  );
}
</style>
