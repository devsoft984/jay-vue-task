<template>
  <a
    :href="'/detail/' + $attrs.id"
    class="subheading mx-3 link"
  >
    <v-card
      class="mx-auto card"
      max-width="344"
    >
      Brand Name : {{ this.$store.state.brand[$attrs.id].name }}
      <br>
      The count of state registrations : {{ this.$store.state.brand[$attrs.id].state_registrations.length }}
    </v-card>
  </a>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style scoped>
.link {
  text-decoration: none;
}
.card {
  text-align: left;
  padding: 10px;
}
</style>