import { TeamScoreWithTotal } from './@type'

export enum Types {
  SAVE_SCORES_OF_TEAM = 'game/SAVE_SCORES_OF_TEAM',
  SET_ERRORS_IN_TEAM_SCORES = 'game/SET_ERRORS_IN_TEAM_SCORES',
}

export const saveTeamScores = (scores: TeamScoreWithTotal[]) => ({
  type: Types.SAVE_SCORES_OF_TEAM,
  payload: { scores },
})

export const setTeamScoresError = (error: Error) => ({
  type: Types.SET_ERRORS_IN_TEAM_SCORES,
  payload: { error },
})
