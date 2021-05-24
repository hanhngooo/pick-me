<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table :fields="fields" :items="cats">
      <template #cell(name)="data">
        <router-link :to="`/pet/cats/${data.index}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['cats'])
  }
}
</script>
