<template>
  <v-row>
    <v-col
      v-for="(item, index) in mockData"
      :key="index"
      :cols="$vuetify.breakpoint.lgAndUp ? '12' : '6'"
      lg="4"
      sm="3"
    >
      <v-card>
        <v-img class="white--text align-end" max-height="400" :src="item.img">
          <v-card-title class="text-bold" v-text="item.name"></v-card-title>
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
  })
};
</script>
