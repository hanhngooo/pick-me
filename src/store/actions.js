export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // first argument is a mutation that is defined in mutations.js
  }
}
