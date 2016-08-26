import superagent from 'superagent';
import asPromised from 'superagent-as-promised';
asPromised(superagent);

const api = {
  getPokemon: (id)=> {
    return superagent
      .get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
  },
}

export default api;