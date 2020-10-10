export function setError (state, data) {
  state.error = data
}
export  function setLoginStatus (state, payload) {
  state.isLogged = payload
}
export function setUser (state, payload) {
  state.user = payload
}
