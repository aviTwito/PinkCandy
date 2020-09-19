<template>
  <v-app>
      <div>
        <TheNavDrawer :items="items" v-model="drawer" />

    <v-toolbar
      color="orange darken-3"
      dark
      fixed
    >

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-xs-only"
      />
     
      <v-toolbar-title v-if="$vuetify.breakpoint.lgAndUp">כותרת</v-toolbar-title>
     

    </v-toolbar>
      <v-content :style="$vuetify.breakpoint.smAndDown ? 'padding-top: 112px' : 'padding-top: 128px'">
        <v-container fluid>
         <div v-for="index in 5" :key="index">
           <Artice/>
         </div>
        </v-container>
      </v-content>
    </div>

  </v-app>
</template>

<script>
// import NavDrawer from './components/nav'
// import helloWorld from '@/components/HelloWorld';
import Artice from '@/components/Article';
import TheNavDrawer from "@/components/nav";
export default {
  name: 'App',
  components:{
    Artice,
    TheNavDrawer
  },
  data: () => ({
    drawer: false,
    items: [
      { icon: "mdi-contacts", text: "Contacts" },
      {
        icon: "mdi-home",
        "icon-alt": "mdi-arrow-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-home", text: "Create label" }]
      },
      {
        icon: "mdi-home",
        "icon-alt": "mdi-arrow-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
    ]
  })
}
</script>
