import { TodoState, TodoAction } from "../../types/todo";
import {TodoActionType} from "../../types/todo";

const initialState: TodoState = {
    todos: [], 
    page: 1, 
    error: null, 
    limit: 10, 
    loading: false
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch(action.type){
        case TodoActionType.FETCH_TODO: 
            return {...state, loading: true}

        case TodoActionType.FETCH_TODO_SUCCESS: 
            return {...state, loading: false, todos: action.payload}

        case TodoActionType.FETCH_TODO_ERROR: 
            return {...state, loading: false, error: action.payload}

        case TodoActionType.SET_TODO_PAGE: 
            return {...state, page: action.payload}

        default: return state; 
    }
}