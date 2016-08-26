import { fromJS } from 'immutable';
import defaultPokemon from './defaultPokemon.js';

const initialState = fromJS({
  selectedPokemon: defaultPokemon,
});

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_POKEMON':
      return state.set('selectedPokemon', fromJS(action.payload.pokemon));
    default:
      return state
  }
}

export default store;