<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar :clipped-right="$vuetify.breakpoint.lgAndUp" color="primary" fixed>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />

      <v-toolbar-title class="white--text" v-if="$vuetify.breakpoint.lgAndUp">כותרת</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer color="secondary" v-model="drawer" :right="$vuetify.rtl" fixed temporary>
      <v-list>
        <v-row>
          <v-col cols="2">
            <v-list-item>
              <v-list-item-action>
                <v-btn color="white" @click="drawer = false" text exact icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item cols="10">
              <v-text-field class="pa-2" placeholder="חיפוש"></v-text-field>
            </v-list-item>
          </v-col>
        </v-row>

        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(child, i) in item.children" :key="i" @click="false">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" @click="false">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-content :style="$vuetify.breakpoint.smAndDown ? 'padding-top: 112px' : 'padding-top: 128px'">
      <v-container>
        <Artice v-for="index in 5" :key="index" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import NavDrawer from './components/nav'
// import helloWorld from '@/components/HelloWorld';
import Artice from "@/components/Article";
export default {
  name: "App",
  components: {
    Artice,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data: () => ({
    drawer: false,
    items: [
      { icon: "mdi-home", text: "ראשי" },
      {
        icon: "mdi-home",
        "icon-alt": "mdi-chevron-down",
        text: "סידור שולחנות",
        model: false,
        children: [{ icon: "mdi-party-popper", text: "ימי הולדת" }],
      },
      {
        icon: "mdi-dots-horizontal-circle-outline",
        "icon-alt": "mdi-chevron-down",
        text: "עוד",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" },
        ],
      },
    ],
  }),
};
</script>


<style scoped>
</style>