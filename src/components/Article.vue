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
      <div v-if="article.favorite" class="ribbon"><span>מומלץ</span></div>
      <v-img
        height="250"
        :src="article.img"
        :gradient="hover ? 'to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)' : ''"
      >
        <div v-if="article.favorite" class="ribbon ribbon-top-left"></div>
      </v-img>

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
      <v-card-actions v-if="user.loggedIn">
        <v-btn icon>
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      v-else
      rounded
      class="box"
      :height="GetSmallDeviceCardHeight(article)"
    >
      <div v-if="article.favorite" class="ribbon"><span>מומלץ</span></div>

      <v-img
        :height="article.favorite ? '220' : '150'"
        class="white--text align-end"
        :src="article.img"
        gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.4)"
        @click="NavigateToArticle(article.id)"
      >
        <v-card-title class="subtitle-1">
          {{ article.headline }}
        </v-card-title>
      </v-img>
      <v-card-subtitle
        v-if="article.subHeader"
        class="text-bold"
        :class="article.favorite ? 'subtitle-2' : 'caption'"
        >{{ article.subHeader }}
      </v-card-subtitle>
      <v-card-actions v-if="user.loggedIn">
        <v-btn icon>
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters } from "vuex";
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
    },
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    NavigateToArticle(id) {
      this.$router.push({ path: `/article/${id}` });
    },
    GetSmallDeviceCardHeight(article) {
      if (article.favorite) {
        return this.user.loggedIn ? "" : "";
      } else {
        return this.user.loggedIn ? "" : "";
      }
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
  border: 1px solid #bbb;
  background: #eee;
}
.ribbon {
  position: absolute;
  left: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  width: 100px;
  display: block;
  background: #79a70a;
  background: linear-gradient(#f70505 0%, #8f0808 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px;
  left: -21px;
}
.ribbon span::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid #8f0808;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #8f0808;
}
.ribbon span::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #8f0808;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #8f0808;
}
.wrap-text {
  -webkit-line-clamp: unset !important;
}
</style>
