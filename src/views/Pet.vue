<template>
  <div>
    <h1>{{ certainPet.name }} ({{ $route.params.type }})</h1>
    <p>Age: {{ certainPet.age }} years old</p>
    <p>Breed: {{ certainPet.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      certainPet: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted() {
    const animal = this[this.$route.params.type][this.$route.params.id]
    this.certainPet = animal
    console.log('animal', animal)
  }
}
</script>
