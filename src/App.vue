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
      <v-spacer></v-spacer>

      <v-btn
        icon
        href="https://instagram.com/the_pink_suger?igshid=1d5kb2e191169"
        target="_blank"
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="secondary"
      :right="$vuetify.rtl"
      fixed
      overlay-color="primary"
      overlay-opacity=".4"
      temporary
      bottom
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
              <a v-if="item.href" :href="item.href" class="body-2 black--text"
                >EDIT</a
              >
              <a v-if="item.href" href="#!" class="body-2 black--text">EDIT</a>
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
          <v-list-item v-else :key="item.text" :to="item.href">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-dialog
          v-if="$vuetify.breakpoint.mdAndDown"
          v-model="joinNewLetterDialog"
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mb-5 text-center"
              text
              color="accent"
              dark
              v-bind="attrs"
              v-on="on"
            >
              הצטרפות לניוזלטר
            </v-btn>
          </template>
          <JoinNewsLetter />
        </v-dialog>
      </template>
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
          <v-col v-if="$vuetify.breakpoint.lgAndUp" lg="2" class="pa-2">
            <JoinNewsLetter />
          </v-col>
          <v-col justify-self sm="12" lg="10" md="12">
            <v-row
              no-gutters
              class="d-flex"
              justify-lg="center"
              align-lg="center"
            >
              <v-col cols="lg-8 md-8 sm-8">
                <router-view />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import JoinNewsLetter from "@/components/JoinNewsLetter.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    JoinNewsLetter,
    Footer
  },
  data: () => ({
    joinNewLetterDialog: false,
    drawer: false,
    items: [
      { icon: "mdi-home", text: "ראשי", href: "/" },
      {
        icon: "mdi-silverware-variant",
        text: "אוכל מסביב לעולם",
        href: "/counries"
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "סידור שולחנות",
        model: false,
        children: [{ icon: "mdi-party-popper", text: "ימי הולדת" }]
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
