<template>
  <v-card>
    <v-card-title>
      <span class="headline">הוסף מצרכים</span>
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="newIgredientItemToUse.title" placeholder="כותרת">
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
                  v-for="(item, index) in newIgredientItemToUse.subIgredients"
                >
                  <v-list-item :key="index" class="mr-0 pr-0">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-edit-dialog @click.native.stop>
                          {{ item }}
                          <v-text-field
                            slot="input"
                            v-model="newIgredientItemToUse.subIgredients[index]"
                          ></v-text-field>
                        </v-edit-dialog>
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon @click="removeIgredient(index)">
                        <v-icon small>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider
                    v-if="
                      index + 1 < newIgredientItemToUse.subIgredients.length
                    "
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
          newIgredientItemToUse.subIgredients.length < 1 ||
            newIgredientItemToUse.title == ''
        "
        color="primary"
        @click="AddIngredients"
      >
        הוסף
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    newIngredientsItem: {
      type: Object,
      default() {
        return {
          title: "",
          subIgredients: []
        };
      }
    }
  },
  data: () => ({
    newIgredient: ""
  }),
  // beforeMount() {
  //   this.newIgredientItemToUse = { ...this.newIngredientsItem };
  // },
  computed: {
    newIgredientItemToUse() {
      return this.newIngredientsItem;
    }
  },
  methods: {
    addNewIgredient() {
      this.newIgredientItemToUse.subIgredients.push(this.newIgredient);
      this.newIgredient = "";
    },
    AddIngredients() {
      this.$emit("addIngredient", this.newIgredientItemToUse);
    },
    removeIgredient(index) {
      this.newIgredientItemToUse.subIgredients.splice(index, 1);
    }
  }
};
</script>
