<template>
  <div v-if="this.$store.state.brand.length == 0">Loading data ... </div>
  <v-container v-else>
    <v-layout
      text-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <v-layout justify-center>
          <div class="d-flex flex-column mb-6">
            <h1>
              Brand Name : {{ this.$store.state.brand[$route.params.id].name }}
            </h1>
            <h2>
              The list of state Registration
            </h2>
            <v-card
              class="ma-3 text-xs-left card"
              v-for="(next, i) in this.$store.state.brand[$route.params.id].state_registrations"
              :key="i"
            >
              State : {{next.state}}
              <br/>
              Registration Number : {{next.registrationNumber}}
              <br/>
            </v-card>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  }),
  components: {
  }
};
</script>

<style scoped>
.card {
  text-align: left;
  padding: 10px;
}
</style>