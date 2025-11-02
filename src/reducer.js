export const initialState = {
  currentPlayer: "X",
  field: ["", "", "", "", "", "", "", "", ""],
  isGameEnded: false,
  isDraw: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PLAYER": {
      return { ...state, currentPlayer: payload };
    }
    case "SET_FIELD": {
      return {
        ...state,
        field: payload,
      };
    }
    case "IS_GAME_END": {
      return {
        ...state,
        isGameEnded: payload,
      };
    }
    case "IS_DRAW": {
      return {
        ...state,
        isDraw: payload,
      };
    }
    case "RESTART_GAME": {
      return initialState;
    }

    default:
      return state;
  }
};
