export default {
  appendPet: (state, pet) => {
    state[pet.type].push(pet)
  }
}
