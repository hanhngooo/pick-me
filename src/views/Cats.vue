<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table :fields="fields" :items="cats">
      <template #cell(name)="data">
        <router-link :to="`/pet/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'

export default {
  data() {
    return {
      cats
    }
  }
}
</script>
