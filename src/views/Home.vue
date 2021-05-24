<template>
  <div class="home">
    <h1>Adopt a pet</h1>
    {{ animalsCount }}
    <button @click="togglePetForm" class="btn btn-primary">
      Add a new pet
    </button>
    <b-form @submit.prevent="handleSubmitForm" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Type:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.type"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        type: null
      }
    }
  },
  computed: {
    ...mapGetters(['animalsCount'])
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmitForm() {
      const { name, age, type } = this.formData
      const payload = {
        type,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      // reset form
      this.formData = { name: '', age: 0, type: null }
    }
  }
}
</script>
