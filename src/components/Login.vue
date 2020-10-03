<template>
  <v-card outlined color="secondary">
    <v-card-text>
      <v-text-field v-model="email" placeholder="Email"></v-text-field>
      <v-text-field v-model="password" placeholder="סיסמא"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="Login">התחבר</v-btn>
      <v-btn color="primary" @click="SignUp">הירשם</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { auth } from "@/firebase/firebaseAPI";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async SignUp() {
      await auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user);
          this.email = "";
          this.password = "";
        });
    },
    async Login() {
      await auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred);
        })
        .catch(() => {
          this.email = "";
          this.password = "";
        });
      this.email = "";
      this.password = "";
    }
  }
};
</script>
