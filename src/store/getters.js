export default {
  animalsCount: state => {
    return state.cats.length + state.dogs.length
  },
  getAllCertainType: state => type => {
    return state.pets.filter(pet => {
      return pet.type === type
    })
  }
}
