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
                <v-dialog
                  v-model="AddIgredientsDialog"
                  persistent
                  max-width="800px"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn color="secondary" dark v-bind="attrs" v-on="on">
                      הוספת מצרכים
                    </v-btn>
                  </template>
                  <AddItemsForm
                    :new-ingredients-item="editedIgredient"
                    @cancel-add-ingridient="cancelAddIngredient"
                    @add-ingredient="SaveNewIgredient"
                  />
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="12">
                <v-card
                  v-for="(igredient, i) in article.igredients"
                  :key="igredient + i"
                  flat
                  tile
                >
                  <template class="mb-10">
                    <v-card-text class="mb-0 pb-0 text-right">
                      <v-row no-gutters>
                        <v-col cols="10">
                          <v-subheader
                            class="text-right font-weight-bold text-subtitle-1"
                            >{{ igredient.title }}</v-subheader
                          >
                        </v-col>
                        <v-col cols="2">
                          <v-card-actions>
                            <v-btn icon @click="editIngredients(igredient)">
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                      </v-row>

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
              <v-col cols="12">
                <v-dialog
                  v-model="AddnewPreperationDialog"
                  max-width="800px"
                  persistent
                >
                  <template #activator="{ on, attrs }">
                    <v-btn color="secondary" dark v-bind="attrs" v-on="on">
                      הוספת הוראות
                    </v-btn>
                  </template>
                  <AddPreperationForm
                    :new-preperation-item="editedPreperationiTem"
                    :edit-mode="preperationEditedIndex > -1 ? true : false"
                    @new-preperation-added="saveNewPReperation"
                    @cancel-add-preperation="cancelNewPreperation"
                  />
                </v-dialog>
              </v-col>

              <v-col cols="12">
                <v-card
                  v-for="(item, index) in article.preperation"
                  :key="index"
                  flat
                  tile
                  class="ma-0"
                >
                  <template class="mb-10">
                    <v-card-text class="mb-0 pb-0 text-right">
                      <v-row no gutters>
                        <v-col cols="10">
                          <v-subheader
                            class="text-right font-weight-bold text-subtitle-1"
                          >
                            {{ item.title }}
                          </v-subheader>
                        </v-col>
                        <v-col cols="2">
                          <v-card-actions>
                            <v-btn icon @click="editPreperation(item)">
                              <v-icon>
                                mdi-pencil
                              </v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                      </v-row>
                      <v-divider></v-divider>
                      <v-list-item v-for="(step, k) in item.steps" :key="k">
                        {{ k + 1 }}. {{ step.text }}
                      </v-list-item>
                      <v-list> </v-list>
                    </v-card-text>
                  </template>
                </v-card>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-col sm="12">
          <v-checkbox v-model="article.favorite" label="מומלץ"> </v-checkbox>
        </v-col>
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
import AddItemsForm from "./AddItemsForm";
import AddPreperationForm from "./AddPreperationForm";
export default {
  components: {
    AddItemsForm,
    AddPreperationForm
  },
  data: () => ({
    article: {
      headline: "",
      img: "",
      content: "",
      subHeader: "",
      description: "",
      favorite: false,
      igredients: [],
      preperation: []
    },
    editedIgredient: {
      title: "",
      subIgredients: []
    },
    ingridientEditedIndex: -1,
    newIgredient: "",
    AddIgredientsDialog: false,
    editedPreperationiTem: {
      title: "",
      steps: []
    },
    preperationEditedIndex: -1,
    AddnewPreperationDialog: false,
    caption: "",
    img1: "",
    imageData: null
  }),
  methods: {
    editIngredients(item) {
      this.ingridientEditedIndex = this.article.igredients.indexOf(item);
      this.editedIgredient = Object.assign({}, item);
      this.AddIgredientsDialog = true;
    },
    SaveNewIgredient(newItem) {
      if (this.ingridientEditedIndex > -1) {
        this.editedIgredient = Object.assign({}, newItem);
        Object.assign(
          this.article.igredients[this.ingridientEditedIndex],
          this.editedIgredient
        );
      } else {
        this.article.igredients.push(this.editedIgredient);
      }
      this.AddIgredientsDialog = false;
      this.editedIgredient = {
        title: "",
        subIgredients: []
      };
      this.ingridientEditedIndex = -1;
    },
    cancelAddIngredient() {
      this.AddIgredientsDialog = false;
      this.editedIgredient = {
        title: "",
        subIgredients: []
      };
      this.ingridientEditedIndex = -1;
    },
    editPreperation(item) {
      this.preperationEditedIndex = this.article.preperation.indexOf(item);
      this.editedPreperationiTem = Object.assign({}, item);
      this.AddnewPreperationDialog = true;
    },
    saveNewPReperation(preperationItem) {
      this.editedPreperationiTem = Object.assign({}, preperationItem);
      if (this.preperationEditedIndex > -1) {
        Object.assign(
          this.article.preperation[this.preperationEditedIndex],
          this.editedPreperationiTem
        );
      } else {
        this.article.preperation.push(this.editedPreperationiTem);
      }
      this.AddnewPreperationDialog = false;
      this.editedPreperationiTem = {
        title: "",
        steps: []
      };
      this.preperationEditedIndex = -1;
    },
    cancelNewPreperation() {
      this.AddnewPreperationDialog = false;
      this.editedPreperationiTem = {
        title: "",
        steps: []
      };
      this.preperationEditedIndex = -1;
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

<style scoped>
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 0;
  margin: 0;
}
</style>
