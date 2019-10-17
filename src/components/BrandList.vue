<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Brand List</h2>

        <v-layout justify-center>
          <div v-if="this.$store.state.brand.length == 0">Loading data ... </div>
          <div v-else>
            <BrandCard
              v-for="(next, i) in this.$store.state.brand"
              :key="i"
              :id="i"
            />
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BrandCard from './BrandCard';
export default {
  data: () => ({
  }),
  components: {
    BrandCard,
  }
};
</script>
