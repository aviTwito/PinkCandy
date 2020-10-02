<template>
  <v-card outlined color="secondary">
    <v-card-title class="justify-center" v-text="headline"> </v-card-title>
    <v-card-text>
      <v-text-field placeholder="שם"></v-text-field>
      <v-text-field placeholder="Email"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="accent">שלח</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headline: "הצטרף לניוזלטר"
    };
  }
};
</script>
