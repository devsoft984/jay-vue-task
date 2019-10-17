<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue Test Task</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import 'es6-promise/auto'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  mounted() {
    if (this.$store.state.brand.length == 0) {
      this.axios
        .get(process.env.VUE_APP_API_URL)
        .then(response => {
          this.$store.state.brand = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }
};
</script>