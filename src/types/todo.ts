export interface TodoState{
    todos: any[]; 
    loading: boolean; 
    error: null | string; 
    page: number; 
    limit: number; 
}

export enum TodoActionType {
    FETCH_TODO = "FETCH_TODO", 
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS", 
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR", 
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction{
    type: TodoActionType.FETCH_TODO; 
}

interface FetchTodoSuccessAction{
    type: TodoActionType.FETCH_TODO_SUCCESS; 
    payload: any[]
}

interface FetchTodoErrorAction{
    type: TodoActionType.FETCH_TODO_ERROR; 
    payload: string; 
}

interface SetTodoPage{
    type: TodoActionType.SET_TODO_PAGE; 
    payload: number; 
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage; 