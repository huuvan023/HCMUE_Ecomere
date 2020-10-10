import {httpClient} from "src/config/httpClient";

export async function onLogin ({ commit, dispatch}, data) {
  try {
    if (data.name.trim() === "" || data.password.trim() === "") {
      commit('setError', 'Please type user name and password')
    }
    else {
      const response = await httpClient.get(`/user/${data.name}`);
      localStorage.setItem('login', true)
      localStorage.setItem('name', data.name)
      await commit('setUser', response)
    }
  }
  catch (error) {
    commit('setError', 'Something was wrong')
    commit('notify/setNotify', {
      color: 'negative',
      message: 'Something was wrong!'
    }, { root: true })
  }
}

export  async function  logOut({ commit }) {
  try {
    localStorage.removeItem('login')
    localStorage.removeItem('name')
    this.$router.replace('/login')
  }
  catch (error) {
    throw error
  }
}

export async function onFetchUser({ commit }, data) {
  const response = await httpClient.get(`/user/${data}`);
  localStorage.setItem('login', true)
  commit('setUser', response)
  commit('setLoginStatus', true)
}
