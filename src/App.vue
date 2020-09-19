<template>
  <v-app>
      <div>
        <v-app-bar>
          <v-app-bar-nav-icon class="mx-1" @click="drawer = !drawer" ></v-app-bar-nav-icon>
          
          <v-toolbar-title v-if="$vuetify.breakpoint.lgAndUp">כותרת</v-toolbar-title>

          <v-toolbar-items>
            <v-btn text>לינק 1</v-btn>
            <v-btn text>לינק 2</v-btn>
            <v-btn text>לינק 3</v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>

          <!-- <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon>
              <v-icon>mdi-export-variant</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </template> -->
        </v-app-bar>

        <!-- <v-col cols="12" class="text-center">
          <v-btn
                class="primary mt-5"
                @click="$vuetify.rtl = ! $vuetify.rtl"
                >
            Toglle RTL
          </v-btn>
        </v-col> -->

        <v-navigation-drawer
        v-model="drawer"
        absolute
        :right="$vuetify.rtl"
        temporary
      >
        <!-- <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
export default {
  name: 'App',
  components:{
    Artice
  },
  data: () => ({
    drawer: true,
    items: [
      { title: 'בית', icon: 'mdi-home' }

    ]
  })
}
</script>
