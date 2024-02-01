export enum State {
    toDo = "To do",
    inProgress = "In progress",
    done = "Done",
    cancelled = "Cancelled"
  }

  export const StateLabelMapping: Record<State, string> = {
    [State.toDo]: "To do",
    [State.inProgress]: "In progress",
    [State.done]: "Done",
    [State.cancelled]: "Cancelled",
};