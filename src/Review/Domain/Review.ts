export enum ReviewStates {
  IN_PROGRESS
}

export class Review {
  id: string
  state: ReviewStates

  getState (): ReviewStates {
    return this.state
  }
}
