<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.headline"
            placeholder="כותרת"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.subHeader"
            placeholder="תת כותרת"
          ></v-text-field>
        </v-col>
        <v-row>
          <v-flex md6 offset-sm3>
            <div>
              <div>
                <v-btn @click="click1">תמונה</v-btn>
                <input
                  ref="input1"
                  type="file"
                  style="display: none"
                  accept="image/*"
                  @change="previewImage"
                />
              </div>

              <div v-if="imageData != null">
                <img class="preview" height="268" width="356" :src="img1" />
                <br />
              </div>
            </div>
          </v-flex>
        </v-row>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { firestorage } from "@/firebase/firebaseAPI";
export default {
  data: () => ({
    article: {
      headline: "",
      img: require("@/assets/test.jpg"),
      content: "",
      subHeader: "",
      description: "",

      igredients: [],
      preperation: []
    },
    caption: "",
    img1: "",
    imageData: null
  }),
  methods: {
    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = firestorage
        .child(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.img1 = url;
            this.article.img = url;
            console.log(this.img1);
          });
        }
      );
    }
  }
};
</script>
