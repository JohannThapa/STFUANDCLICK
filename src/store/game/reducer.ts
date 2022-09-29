// import createReducer from 'utils/createReducer'
import { createReducer } from '@reduxjs/toolkit';
import { GameReducer } from './@type';
import * as actions from './action';

export const initialState: GameReducer = {
  teamScores: {
    isLoading: false,
    error: null,
    data: null,
  },
}

export default createReducer(initialState, {
  [actions.Types.SAVE_SCORES_OF_TEAM]: (state: GameReducer, action: ReturnType<typeof actions.saveTeamScores>): GameReducer => {
    const { scores } = action.payload

    return {
      ...state,
      teamScores: {
        ...state.teamScores,
        data: scores,
      },
    }
  },
  [actions.Types.SET_ERRORS_IN_TEAM_SCORES]: (state: GameReducer, action: ReturnType<typeof actions.setTeamScoresError>): GameReducer => {
    const { error } = action.payload

    return {
      ...state,
      teamScores: {
        ...state.teamScores,
        isLoading: false,
        error,
      },
    }
  },
})
