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
          <v-col cols="12" sm="12">
            <div class="mx-auto mb-2">
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
              <img class="preview" height="200" width="356" :src="img1" />
              <br />
            </div>
          </v-col>
        </v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="article.description"
            placeholder="תיאור"
          ></v-text-field>
        </v-col>
        <v-expansion-panels accordion focusable>
          <v-expansion-panel>
            <v-expansion-panel-header>מצרכים</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-col cols="12" sm="12">
                <v-dialog v-model="AddIgredientsDialog" max-width="800px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="secondary" dark v-bind="attrs" v-on="on">
                      הוספת מצרכים
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">הוספת מצרכים</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="NewIngredientsItem.title"
                        placeholder="כותרת"
                      >
                      </v-text-field>
                      <v-row align="center">
                        <v-col sm="11">
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
                        <v-col class="mt-0 pt-0" cols="12">
                          <v-row no-gutters>
                            <v-col cols="12">
                              <v-card flat tile>
                                <template
                                  v-for="(item,
                                  index) in NewIngredientsItem.subIgredients"
                                >
                                  <v-list-item :key="index" class="mr-0 pr-0">
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <v-edit-dialog @click.native.stop>
                                          {{ item }}
                                          <v-text-field
                                            slot="input"
                                            v-model="
                                              NewIngredientsItem.subIgredients[
                                                index
                                              ]
                                            "
                                          ></v-text-field>
                                        </v-edit-dialog>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                      <v-btn
                                        icon
                                        @click="removeIgredient(index)"
                                      >
                                        <v-icon small>
                                          mdi-delete
                                        </v-icon>
                                      </v-btn>
                                    </v-list-item-action>
                                    <!-- <v-list-item-action>
                                <v-dialog>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                      <v-icon small>
                                        mdi-pencil
                                      </v-icon>
                                    </v-btn>
                                  </template>
                                </v-dialog>
                              </v-list-item-action> -->
                                  </v-list-item>
                                  <v-divider
                                    v-if="
                                      index + 1 <
                                        NewIngredientsItem.subIgredients.length
                                    "
                                    :key="index"
                                  ></v-divider>
                                </template>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" @click="AddIngredients">
                        הוסף
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card flat tile>
                  <template v-for="(igredient, i) in article.igredients">
                    <v-card-text
                      :key="igredient + i"
                      class="mb-0 pb-0 text-right"
                    >
                      <v-subheader
                        class="text-right font-weight-bold text-subtitle-1"
                        >{{ igredient.title }}</v-subheader
                      >
                      <v-divider></v-divider>
                      <v-card-text class="ma-0 pa-0">
                        <v-row :key="i" dense>
                          <v-col
                            v-for="(subIgredient, k) in igredient.subIgredients"
                            :key="subIgredient + k"
                            cols="12"
                          >
                            <v-list-item>
                              <v-list-item-subtitle>
                                {{ subIgredient }}
                              </v-list-item-subtitle>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card-text>
                  </template>
                </v-card>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              הוראות
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-col cols="12"> </v-col>
              <v-col cols="12" sm="12">
                <v-dialog v-model="AddnewPreperationDialog" max-width="800px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="secondary" dark v-bind="attrs" v-on="on">
                      הוספת הוראות
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">הוספת הוראות</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="newPreperationItem.title"
                        placeholder="כותרת"
                      >
                      </v-text-field>
                      <v-row align="center">
                        <v-col sm="11">
                          <v-text-field
                            v-model="newStep"
                            placeholder="צעד"
                            @keyup.enter="addNewStep"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col sm="1">
                          <v-btn icon @click="addNewStep">
                            <v-icon>
                              mdi-plus
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col class="mt-0 pt-0" cols="12">
                          <v-row no-gutters>
                            <v-col cols="12">
                              <v-card flat tile>
                                <template
                                  v-for="(item,
                                  index) in newPreperationItem.steps"
                                >
                                  <v-list-item :key="index" class="mr-0 pr-0">
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        <v-edit-dialog @click.native.stop>
                                          {{ item.text }}
                                          <v-text-field
                                            slot="input"
                                            v-model="
                                              newPreperationItem.steps[index]
                                                .text
                                            "
                                          ></v-text-field>
                                        </v-edit-dialog>
                                      </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                      <v-btn
                                        icon
                                        @click="removePreperationStep(index)"
                                      >
                                        <v-icon small>
                                          mdi-delete
                                        </v-icon>
                                      </v-btn>
                                    </v-list-item-action>
                                  </v-list-item>
                                  <v-divider
                                    v-if="
                                      index + 1 <
                                        newPreperationItem.steps.length
                                    "
                                    :key="index"
                                  ></v-divider>
                                </template>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" @click="AddPreperations">
                        הוסף
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="12"> </v-col>
              <v-col cols="12">
                <v-card flat tile class="ma-0">
                  <v-card-text>
                    <v-list>
                      <div
                        v-for="(item, index) in article.preperation"
                        :key="index"
                      >
                        <v-list-item-title
                          class="text-right font-weight-bold text-subtitle-1"
                        >
                          {{ item.title }}
                        </v-list-item-title>
                        <v-list-item v-for="(step, k) in item.steps" :key="k">
                          {{ k + 1 }}. {{ step.text }}
                        </v-list-item>
                      </div>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-col sm="12">
          <v-btn color="primary" @click="AddNewRecipe">
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
    NewIngredientsItem: {
      title: "",
      subIgredients: []
    },
    newIgredient: "",
    AddIgredientsDialog: false,
    newPreperationItem: {
      title: "",
      steps: []
    },
    newStep: "",
    newPreperationStep: {
      text: "",
      img: ""
    },
    AddnewPreperationDialog: false,
    caption: "",
    img1: "",
    imageData: null
  }),
  methods: {
    AddIngredients() {
      this.article.igredients.push(this.NewIngredientsItem);
      this.NewIngredientsItem = {
        title: "",
        subIgredients: []
      };
      this.AddIgredientsDialog = false;
    },
    AddPreperations() {
      this.article.preperation.push(this.newPreperationItem);
      this.newPreperationItem = {
        title: "",
        steps: []
      };
      this.AddnewPreperationDialog = false;
    },
    removeIgredient(index) {
      this.NewIngredientsItem.subIgredients.splice(index, 1);
    },
    removePreperationStep(index) {
      this.newPreperationItem.stpes.splice(index, 1);
    },
    AddNewRecipe() {
      db.collection("recipes")
        .add(this.article)
        .then(() => {
          this.article = {
            headline: "",
            img: "",
            content: "",
            subHeader: "",
            description: "",

            igredients: [],
            preperation: []
          };
          this.$router.push("/");
        });
    },
    addNewIgredient() {
      this.NewIngredientsItem.subIgredients.push(this.newIgredient);
      this.newIgredient = "";
    },
    addNewPreperation() {
      this.newPreperationItem.push(this.newPreperationStep);
    },
    addNewStep() {
      this.newPreperationItem.steps.push({ text: this.newStep, img: "" });
      this.newStep = "";
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
