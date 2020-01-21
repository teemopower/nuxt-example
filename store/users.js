export const state = () => ({
    list: [],
    letters: ['a','b','c']
  })
  
export const mutations = {
    addUser (state, payload) {
        console.log('mutation >>', payload)
        state.list.push({
            payload,
        })
    }
}

export const setters = {
    
}

export const getters = {
    getLetters: (state) => {
      return state.letters
    }
}

export const actions = {
    testAction: (context, payload) => {
        console.log('action >>', payload)
        context.commit('addUser', payload);
    }
}
