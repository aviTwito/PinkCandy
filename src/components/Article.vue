<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      outlined
      max-width="600"
      :width="$vuetify.breakpoint.lgAndUp ? '300' : '400'"
      @click="NavigateToArticle(article.id)"
    >
      <v-img
        class="white--text align-end"
        :height="$vuetify.breakpoint.lgAndUp ? '200' : '200'"
        :src="article.img"
        :gradient="hover ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)' : ''"
      />
      <v-card-title class="headline mb-1">
        <!-- <h1 class="display-2 font-weight-bold mb-3 mx-auto">כותרת 1</h1> -->
        {{ article.headline }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle v-if="article.subHeader">{{
        article.subHeader
      }}</v-card-subtitle>
      <v-card-text>
        <p v-if="readMore" class="subheading font-weight-regular">
          {{ contentToShow }}...
        </p>
        <p v-else class="subheading font-weight-regular">
          {{ contentToShow }}
        </p>
      </v-card-text>
      <!-- <v-card-actions>
          <v-btn color="primary" @click="readMore = !readMore">
            {{ btnText }}
          </v-btn>
        </v-card-actions> -->
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          img: "",
          content: "",
          headline: ""
        };
      }
    }
  },
  data() {
    return {
      readMore: true
    };
  },
  computed: {
    btnText() {
      return this.readMore ? `קרא עוד` : `הסתר`;
    },
    contentToShow() {
      return this.readMore
        ? this.article.content.slice(0, 50)
        : this.article.content;
    }
  },
  methods: {
    NavigateToArticle(id) {
      this.$router.push({ path: `/article/${id}` });
    }
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  height: 100%;
}
.test:hover {
  animation: scaleMe 500ms ease-in-out 0s forwards;
}

@keyframes scaleMe {
  100% {
    transform: scale(1.2);
  }
}
</style