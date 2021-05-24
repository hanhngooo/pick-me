export default {
  appendPet: (state, { type, pet }) => {
    state[type].push(pet)
  }
}
