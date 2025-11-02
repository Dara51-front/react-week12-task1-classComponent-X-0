export const SET_CURRENT_PLAYER = (player) => ({
  type: "SET_CURRENT_PLAYER",
  payload: player,
});

export const SET_FIELD = (fie) => ({
  type: "SET_FIELD",
  payload: fie,
});

export const IS_GAME_END = (status) => ({
  type: "IS_GAME_END",
  payload: status,
});

export const IS_DRAW = (draw) => ({
  type: "IS_DRAW",
  payload: draw,
});

export const RESTART_GAME = {
  type: "RESTART_GAME",
};
