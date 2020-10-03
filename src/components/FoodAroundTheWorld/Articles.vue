<template>
  <v-row>
    <v-img class="white--text align-end " max-height="400" :src="article.img" />
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="text-center">
          <h1>{{ article.headline }}</h1>
        </v-card-title>
        <v-card-text>
          {{ article.content }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      v-for="(location, index) in article.locations"
      :key="index"
      :cols="$vuetify.breakpoint.lgAndUp ? '12' : '6'"
      lg="4"
      sm="3"
    >
      <v-card>
        <v-img
          class="white--text align-end"
          height="200"
          gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.4)"
          :src="location.img"
        >
          <v-card-title
            class="header text-center text-bold"
            v-text="location.name"
          ></v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          headline: "פראג",
          img: require("@/assets/Prague/praguecover.jpeg"),
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed malesuada lectus.
                Donec ultrices ipsum non ipsum gravida, ."`,
          subHeader: "SubHeader",
          locations: [
            {
              img: require("@/assets/Prague/ifcafe1.jpeg"),
              name: "IF Cafe"
            },
            {
              img: require("@/assets/Prague/fatcat1.jpeg"),
              name: "Fat Cat"
            },
            {
              img: require("@/assets/test.jpg"),
              name: "Test 1"
            },
            {
              img: require("@/assets/test.jpg"),
              name: "Test 4"
            }
          ]
        };
      }
    }
  },
  data: () => ({})
};
</script>
