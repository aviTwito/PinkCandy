<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="preperationItem.title" placeholder="כותרת">
      </v-text-field>

      <v-row justify="center" align="center" no-gutters>
        <div class="test">
          <v-row>
            <v-col cols="10">
              <v-text-field
                v-model="newStep"
                placeholder="צעד"
                @keyup.enter="addNewStep"
              >
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn class="vertical-center" icon @click="addNewStep">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-col cols="12">
            <v-btn class="test mb-2" small primary @click="addImage">
              תמונה
            </v-btn>
            <span v-if="imageData" class="test text-center">{{
              imageData.name
            }}</span>
            <input
              ref="input1"
              type="file"
              style="display: none"
              accept="image/*"
              @change="previewImage"
            />
          </v-col>
        </div>

        <v-col class="mt-0 pt-0" cols="12">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card flat tile>
                <template v-for="(item, index) in preperationItem.steps">
                  <v-list-item :key="index" class="mr-0 pr-0">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-edit-dialog @click.native.stop>
                          {{ item.text }}
                          <v-text-field
                            slot="input"
                            v-model="preperationItem.steps[index].text"
                          ></v-text-field>
                        </v-edit-dialog>
                      </v-list-item-title>
                      <v-list-item-subtitle v-if="item.img"
                        >{{ item.imageName }}
                        <v-btn small icon @click="item.img = null">
                          <v-icon small>
                            mdi-camera-off
                          </v-icon>
                        </v-btn>
                      </v-list-item-subtitle>
                      <!-- <v-dialog v-model="showStepDialog" max-width="300">
                        <v-img :src="item.img"> </v-img>
                      </v-dialog> -->
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="removePreperationStep(index)">
                        <v-icon small>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                      <!-- <v-btn
                          v-if="item.img"
                          icon
                          @click="showStepDialog = true"
                        >
                          <v-icon small>
                            mdi-camera-image
                          </v-icon>
                        </v-btn> -->
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider
                    v-if="index + 1 < preperationItem.steps.length"
                    :key="item + index"
                  ></v-divider>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :disabled="
          preperationItem.steps.length < 1 || preperationItem.title == ''
        "
        color="primary"
        @click="AddPreperations"
      >
        {{ buttonText }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="$emit('cancel-add-preperation')">
        ביטול
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { firestorage } from "@/firebase/firebaseAPI";
export default {
  name: "AddPreperationForm",
  props: {
    newPreperationItem: {
      type: Object,
      default() {
        return {
          title: "",
          steps: []
        };
      }
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newStep: "",
      newPreperationStep: {
        text: "",
        img: ""
      },
      caption: "",
      img1: "",
      imageData: null
    };
  },
  computed: {
    formTitle() {
      return this.editMode ? "עריכה" : "הוספת מצרכים";
    },
    buttonText() {
      return this.editMode ? "שמור" : "הוסף";
    },
    preperationItem() {
      return this.newPreperationItem;
    }
  },
  methods: {
    addImage() {
      this.$refs.input1.click();
    },
    async addNewStep() {
      if (this.imageData) {
        await this.onUpload();
        // this.preperationItem.steps.push({
        //   text: this.newStep,
        //   img: this.img1,
        //   imageName: this.imageData.name
        // });
      } else {
        this.preperationItem.steps.push({ text: this.newStep, img: "" });
        this.imageData = null;
        this.newStep = "";
      }
      // this.imageData = null;
      // this.newStep = "";
    },
    AddPreperations() {
      this.$emit("new-preperation-added", this.newPreperationItem);
    },
    removePreperationStep(index) {
      this.preperationItem.steps.splice(index, 1);
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
    },
    async onUpload() {
      this.img1 = null;
      const storageRef = firestorage
        .child(`${this.imageData.name}`)
        .put(this.imageData);
      await storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        () => {},
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.img1 = url;
            this.preperationItem.steps.push({
              text: this.newStep,
              img: this.img1,
              imageName: this.imageData.name
            });
            this.imageData = null;
            this.newStep = "";
          });
        }
      );
    }
  }
};
</script>

<style scoped>
.test {
  width: 100%;
}
.vertical-center {
  text-align: center;
  margin: 0;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.center {
  text-align: center;
}

.action-container {
  display: flex;
  align-items: center;
}
</style>
