<template>
  <v-row no-gutters>
    <v-col class="mb-2" md="8" offset-md="2" sm="8" offset-sm="2">
      <v-card
        :style="$vuetify.breakpoint.smAndDown ? styleObject : ''"
        :class="$vuetify.breakpoint.lgAndUp ? '' : 'ma-2'"
        class="pa-2 pt-0"
        outlined
        max-width="1200"
      >
        <v-card-title class="text-h5 justify-center">
          כותרת
        </v-card-title>
        <v-img
          :class="ma - 2"
          class="white--text align-end"
          max-height="400"
          :src="article.img"
        />
        <v-card-text>
          {{ article.description }}
        </v-card-text>
        <v-divider />
        <v-card-subtitle class="font-weight-bold pb-1 pr-0 mr-0 pt-2">
          מצרכים
        </v-card-subtitle>

        <v-card-text class="mr-3">
          <ul>
            <li v-for="item in article.igredients" :key="item">
              {{ item }}
            </li>
          </ul>
        </v-card-text>

        <v-card-subtitle class="font-weight-bold pb-1 pr-0 mr-0 pt-2">
          אופן הכנה
        </v-card-subtitle>
        <v-card-text class="mr-3">
          <ol>
            <li v-for="item in article.preperation" :key="item">
              {{ item.text }}
              <v-img
                v-if="item.img"
                class="white--text align-end mt-2 mb-2"
                max-height="400"
                :src="article.img"
              />
            </li>
          </ol>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    styleObject: { border: "1px solid green" },
    article: {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed malesuada lectus.

                Donec ultrices ipsum non ipsum gravida, vitae bibendum nisl fermentum.  "`,
      img: require("@/assets/test.jpg"),
      igredients: [
        "בדיקה 1",
        "בדיקה 2",
        "בדיקה 3",
        "בדיקה 4",
        "בדיקה 5",
        "בדיקה 6"
      ],
      preperation: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis c"
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed malesuada lectus.
                Donec ultrices ipsum no"`
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis el"
        },
        {
          text:
            "`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, feli",
          img: require("@/assets/test.jpg")
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis c"
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, qu"`
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed ma"`
        }
      ]
    }
  })
};
</script>
