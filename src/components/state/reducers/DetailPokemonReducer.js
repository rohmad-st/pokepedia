import {
  SHOW_DETAIL_POKEMON,
  HIDE_DETAIL_POKEMON
} from '../actions/PokemonActions';

const initialState = {
  modalType: null,
  modalProps: {},
};

export const DetailPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAIL_POKEMON:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    case HIDE_DETAIL_POKEMON:
      return initialState;
    default:
      return state;
  }
};
