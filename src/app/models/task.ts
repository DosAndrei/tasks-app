import { State } from "./state";

export interface Task{
    id: string
    title: string;
    description: string;
    author: string;
    status: State;
}