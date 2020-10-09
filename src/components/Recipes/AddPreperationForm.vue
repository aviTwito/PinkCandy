<template>
  <v-card>
    <v-card-title>
      <span class="headline">הוספת הוראות</span>
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="newPreperationItem.title" placeholder="כותרת">
      </v-text-field>
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="10">
          <v-text-field
            v-model="newStep"
            placeholder="צעד"
            @keyup.enter="addNewStep"
          >
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn icon @click="addNewStep">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
        <!-- <v-col cols="12">
          <v-btn small primary>
            תמונה
          </v-btn>
        </v-col> -->
        <v-col class="mt-0 pt-0" cols="12">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card flat tile>
                <template v-for="(item, index) in newPreperationItem.steps">
                  <v-list-item :key="index" class="mr-0 pr-0">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-edit-dialog @click.native.stop>
                          {{ item.text }}
                          <v-text-field
                            slot="input"
                            v-model="newPreperationItem.steps[index].text"
                          ></v-text-field>
                        </v-edit-dialog>
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="removePreperationStep(index)">
                        <v-icon small>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider
                    v-if="index + 1 < newPreperationItem.steps.length"
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
</template>

<script>
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
    }
  },
  data() {
    return {
      newStep: "",
      newPreperationStep: {
        text: "",
        img: ""
      }
    };
  },
  methods: {
    addNewStep() {
      this.newPreperationItem.steps.push({ text: this.newStep, img: "" });
      this.newStep = "";
    },
    AddPreperations() {
      this.$emit("newPreperationAdded", this.newPreperationItem);
    },
    removePreperationStep(index) {
      this.newPreperationItem.steps.splice(index, 1);
    }
  }
};
</script>
