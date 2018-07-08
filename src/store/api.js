export function getTodosOsPacotes () {
  return fetch('http://devup.com.br/gotour/api/pacotes')
    .then(T => T.json())
}

export function getPacoteById (id) {
  return fetch(`http://devup.com.br/gotour/api/pacote/${id}/detalhes`)
    .then(T => T.json())
    .then(T => ({ ...T.pacote, ...T }))
}
