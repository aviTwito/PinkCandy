<template>
  <v-row no-gutters>
    <v-col class="mb-2" md="6" offset-md="3" sm="8" offset-sm="2">
      <v-card elevation="5" outlined max-width="1000">
        <v-img class="white--text align-end" height="200" v-bind:src="article.img" />
        <v-card-title class="headline">
          <!-- <h1 class="display-2 font-weight-bold mb-3 mx-auto">כותרת 1</h1> -->
          כותרת
        </v-card-title>
        <v-card-subtitle>בדיקה בדיקה בידקה</v-card-subtitle>
        <v-card-text>
          <p v-if="readMore" class="subheading font-weight-regular">{{ contentToShow }}...</p>
          <p v-else class="subheading font-weight-regular">{{contentToShow}}</p>
         
        </v-card-text>
        <v-card-actions>
           <v-btn color="primary" @click="readMore = !readMore">{{btnText}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      readMore: true,
      article:{
        img:'',
        content:''
      }
    };
  },
  methods: {
   init(){
     this.article.id = 0;
     this.article.img = require("@/assets/test.jpg"),
     this.article.content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis elit magna, quis commodo risus dapibus at. Sed auctor, felis ac rutrum mollis, lectus sapien fringilla leo, in varius sapien dui eget elit. Curabitur at facilisis velit, eget elementum eros. Sed nec nulla faucibus, cursus ex non, ullamcorper elit. Nulla ultrices lobortis hendrerit. Aenean ultrices est at neque lacinia, at viverra risus porttitor. Donec sed malesuada lectus.

                Donec ultrices ipsum non ipsum gravida, vitae bibendum nisl fermentum. Praesent dui metus, pellentesque sit amet justo in, tempor dictum lacus. Mauris id quam ante. Ut dictum, lorem et sollicitudin semper, erat nunc rhoncus nunc, et feugiat arcu ipsum et enim. Duis vitae dolor eu lacus congue iaculis. Aliquam orci sem, iaculis vel ultricies et, tincidunt non enim. Vestibulum eu maximus massa, tempus aliquet diam.

                Pellentesque in leo tellus. Proin dapibus quam id venenatis eleifend. Vestibulum id enim in nisl pulvinar ullamcorper. Nunc gravida diam a consectetur vulputate. Proin laoreet eget ipsum eu lobortis. Morbi neque arcu, elementum nec urna id, ornare pharetra quam. Morbi pulvinar justo dapibus interdum rhoncus.

                Mauris est neque, ultricies vel fringilla sed, ultricies quis enim. Cras diam libero, consequat sit amet facilisis id, ultricies sodales dui. Phasellus blandit semper enim, vitae hendrerit tortor bibendum sed. Proin pulvinar, ligula eget aliquet commodo, ipsum lacus ullamcorper erat, scelerisque pulvinar nunc mauris at nisl. Aliquam porta, purus et feugiat varius, est elit pellentesque dui, vel volutpat nisl mauris vitae sapien. Mauris id turpis at ligula ultricies aliquam. Donec enim nibh, ultricies vitae orci eu, lobortis facilisis eros. Suspendisse ut dolor porttitor, tristique elit eu, gravida justo. Curabitur hendrerit efficitur felis, hendrerit consectetur augue pretium tempor. Cras nisl lacus, imperdiet ut ipsum a, malesuada pretium massa. Nulla scelerisque ligula eu tincidunt rhoncus. Curabitur lacinia et libero eu accumsan.

                Aliquam dapibus vestibulum viverra. Proin fringilla in odio quis cursus. Aenean iaculis non libero a dapibus. Mauris at laoreet est, a sagittis sapien. Aenean laoreet nulla eros, id condimentum dui elementum et. Nam at orci et odio tempus molestie tempor vitae tellus. Morbi ac posuere quam. Ut iaculis, magna a efficitur rhoncus, dui felis viverra urna, sit amet pellentesque velit lectus consectetur risus. Duis scelerisque nibh placerat sem auctor, at varius odio vestibulum."`
   }
  },
  created(){
    this.init();
  },
  computed: {
    btnText() {
      return this.readMore ? `קרא עוד` : `הסתר`;
    },
    contentToShow() {
      return this.readMore ? this.article.content.slice(0, 200) : this.article.content;
    }
  }
};
</script>

<style scoped>
</style>>
  
