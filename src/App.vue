<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar
      :clipped-right="$vuetify.breakpoint.lgAndUp"
      color="primary"
      fixed
    >
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />

      <v-toolbar-title v-if="$vuetify.breakpoint.lgAndUp" class="white--text">
        כותרת
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="secondary"
      :right="$vuetify.rtl"
      fixed
      temporary
    >
      <v-list>
        <v-row>
          <v-col cols="2">
            <v-list-item>
              <v-list-item-action>
                <v-btn color="white" text exact icon @click="drawer = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item cols="10">
              <v-text-field class="pa-2" placeholder="חיפוש" />
            </v-list-item>
          </v-col>
        </v-row>

        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
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
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              @click="false"
            >
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
    <v-main
      :style="
        $vuetify.breakpoint.smAndDown
          ? 'padding-top: 100px'
          : 'padding-top: 128px'
      "
    >
      <v-container
        fluid
        :class="[
          {
            'pr -0': $vuetify.breakpoint.mdAndUp,
            'mr-0': $vuetify.breakpoint.mdAndUp
          },
          `text-sm-center`
        ]"
      >
        <!-- <v-layout column align-center>
          <v-flex>
            
          </v-flex>
          <v-flex>
            <ArticePage />
          </v-flex>
        </v-layout> -->
        <v-row class="d-flex" justify-lg="space-between" no-gutters>
          <v-col v-if="$vuetify.breakpoint.mdAndUp" lg="2" class="pa-2">
            <Article />
          </v-col>
          <v-col justify-self sm="12" lg="10">
            <v-row
              no-gutters
              class="d-flex"
              justify-lg="center"
              align-lg="center"
            >
              <v-col cols="lg-8">
                <router-view />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- <v-row class="ma-0 pa-0" no-gutters>
          <v-col v-if="$vuetify.breakpoint.mdAndUp" lg="4">
            <ArticePage v-for="index in 2" :key="index" />
            <Article />
          </v-col>
          <v-col lg="8" sm="12" xs="12">
             <ArticePage /> -->
        <!-- <Article v-for="index in 5" :key="index" /> 
            <router-view />
          </v-col>
        </v-row> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import NavDrawer from './components/nav'
// import helloWorld from '@/components/HelloWorld';
import Article from "@/components/Article";
export default {
  name: "App",
  components: {
    Article
  },
  data: () => ({
    drawer: false,
    items: [
      { icon: "mdi-home", text: "ראשי" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "סידור שולחנות",
        model: false,
        children: [{ icon: "mdi-party-popper", text: "ימי הולדת" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "עוד",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      }
    ]
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style scoped></style>
