<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-if="$vuetify.breakpoint.lgAndUp"
      :elevation="hover ? 12 : 2"
      outlined
      max-width="600"
      class="mx-auto"
      @click="NavigateToArticle(article.id)"
    >
      <v-img
        height="250"
        :src="article.img"
        :gradient="hover ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)' : ''"
      />
      <v-card-title class="headline">
        {{ article.headline }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle v-if="article.subHeader">{{
        article.subHeader
      }}</v-card-subtitle>
      <v-card-text>
        <div v-if="$vuetify.breakpoint.smAndDown">
          <p v-if="readMore" class="subheading font-weight-regular">
            {{ contentToShow }}...
          </p>
          <p v-else class="subheading font-weight-regular">
            {{ contentToShow }}
          </p>
        </div>
      </v-card-text>
    </v-card>
    <v-card
      v-else
      elevation="1"
      :height="article.favorite ? '280' : '220'"
      :max-height="article.favorite ? '300' : '226'"
    >
      <v-img
        :height="article.favorite ? '220' : '150'"
        class="white--text align-end"
        :src="article.img"
        gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.4)"
        @click="NavigateToArticle(article.id)"
      >
        <div class="ribbon ribbon-top-left"><span>שווה</span></div>
        <v-card-title class="subtitle-1">
          {{ article.headline }}
        </v-card-title>
      </v-img>
      <v-card-subtitle
        v-if="article.subHeader"
        :class="article.favorite ? 'subtitle-1' : 'caption'"
        >{{ article.subHeader }}</v-card-subtitle
      >
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
          headline: "Test",
          img: "",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed malesuada lectus.
                Donec ultrices ipsum non ipsum gravida, vitae bibendum nisl fermentum. Praesent dui metus, pellentesque sit amet justo in, tempor dictum lacus. Mauris id quam ante. Ut dictum, lorem et sollicitudin semper, erat nunc rhoncus nunc, et feugiat arcu ipsum et enim. Duis vitae dolor eu lacus congue iaculis. Aliquam orci sem, iaculis vel ultricies et, tincidunt non enim. Vestibulum eu maximus massa, tempus aliquet diam.
                Pellentesque in leo tellus. Proin dapibus quam id venenatis eleifend. Vestibulum id enim in nisl pulvinar ullamcorper. Nunc gravida diam a consectetur vulputate. Proin laoreet eget ipsum eu lobortis. Morbi neque arcu, elementum nec urna id, ornare pharetra quam. Morbi pulvinar justo dapibus interdum rhoncus.
                Mauris est neque, ultricies vel fringilla sed, ultricies quis enim. Cras diam libero, consequat sit amet facilisis id, ultricies sodales dui. Phasellus blandit semper enim, vitae hendrerit tortor bibendum sed. Proin pulvinar, ligula eget aliquet commodo, ipsum lacus ullamcorper erat, scelerisque pulvinar nunc mauris at nisl. Aliquam porta, purus et feugiat varius, est elit pellentesque dui, vel volutpat nisl mauris vitae sapien. Mauris id turpis at ligula ultricies aliquam. Donec enim nibh, ultricies vitae orci eu, lobortis facilisis eros. Suspendisse ut dolor porttitor, tristique elit eu, gravida justo. Curabitur hendrerit efficitur felis, hendrerit consectetur augue pretium tempor. Cras nisl lacus, imperdiet ut ipsum a, malesuada pretium massa. Nulla scelerisque ligula eu tincidunt rhoncus. Curabitur lacinia et libero eu accumsan.
                Aliquam dapibus vestibulum viverra. Proin fringilla in odio quis cursus. Aenean iaculis non libero a dapibus. Mauris at laoreet est, a sagittis sapien. Aenean laoreet nulla eros, id condimentum dui elementum et. Nam at orci et odio tempus molestie tempor vitae tellus. Morbi ac posuere quam. Ut iaculis, magna a efficitur rhoncus, dui felis viverra urna, sit amet pellentesque velit lectus consectetur risus. Duis scelerisque nibh placerat sem auctor, at varius odio vestibulum."`,
          subHeader: "SubHeader"
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
.box {
  position: relative;
  max-width: 600px;
  width: 90%;
  height: 400px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid #2980b9;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #f000bc;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 12px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -10px;
  left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
}
.wrap-text {
  -webkit-line-clamp: unset !important;
}
</style>
