// initial state
export const state = () => ({
  page: 'index'
})

// getters
export const getters = {
  page: state => state.page
}

// actions
export const actions = {}

// mutations
export const mutations = {
  page(state, page) {
    state.page = page
  }
}
