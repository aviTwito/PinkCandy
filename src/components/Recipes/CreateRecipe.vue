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
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.description"
            placeholder="תיאור"
          ></v-text-field>
        </v-col>
        <v-col class="mb-0 pb-0" cols="12">
          <v-row justify="start" align="center">
            <v-col sm="4">
              <v-text-field
                v-model="newIgredient"
                placeholder="מצרך"
                @keyup.enter="addNewIgredient"
              >
              </v-text-field>
            </v-col>
            <v-col sm="1">
              <v-btn icon @click="addNewIgredient">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="mt-0 pt-0" cols="12">
          <v-row no-gutters>
            <v-col cols="4">
              <v-list>
                <v-list-item
                  v-for="(item, index) in article.igredients"
                  :key="index"
                  class="mr-0 pr-0"
                >
                  {{ index + 1 }}. {{ item }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-card flat class="ma-0">
            <v-card-title>
              הוראות הכנה
            </v-card-title>
            <v-card-text>
              <v-row justify="start" align="center">
                <v-col sm="4">
                  <v-text-field
                    v-model="newPreperationStep.text"
                    placeholder="מצרך"
                    @keyup.enter="addNewPreperationStep"
                  >
                  </v-text-field>
                </v-col>
                <v-col sm="1">
                  <v-btn icon @click="addNewPreperationStep">
                    <v-icon>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-list>
                <v-list-item
                  v-for="(item, index) in article.preperation"
                  :key="index"
                >
                  {{ index + 1 }}. {{ item.text }}
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12">
          <v-btn @click="AddNewRecipe" color="primary">
            שלח
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { firestorage, db } from "@/firebase/firebaseAPI";
export default {
  data: () => ({
    article: {
      headline: "",
      img: "",
      content: "",
      subHeader: "",
      description: "",

      igredients: [],
      preperation: []
    },
    newIgredient: "",
    newPreperationStep: {
      text: "",
      img: ""
    },
    caption: "",
    img1: "",
    imageData: null
  }),
  methods: {
    AddNewRecipe() {
      db.collection("recipes").add(this.article);
    },
    addNewIgredient() {
      this.article.igredients.push(this.newIgredient);
      this.newIgredient = "";
    },
    addNewPreperationStep() {
      const temp = this.newPreperationStep;
      this.article.preperation.push(temp);
      this.newPreperationStep = { text: "", img: "" };
    },
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
        () => {
          // console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.img1 = url;
            this.article.img = url;
            // console.log(this.img1);
          });
        }
      );
    }
  }
};
</script>
