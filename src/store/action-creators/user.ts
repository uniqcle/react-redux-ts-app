import { UserActionTypes, UserAction } from "../../types/users"
import {Dispatch} from 'redux'
import axios from "axios"
import { resourceLimits } from "worker_threads"



export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS, 
                payload: response.data})
        } catch(e){
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: "Произошла ошибка при загрузке пользователя"})
        }
    }
}