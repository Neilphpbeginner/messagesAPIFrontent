import { FETCH_MESSAGES_SUCCESSFULL } from '../types'

export const fetchMessages = () => {
    return (dispatch) => {
        fetch(`https://guarded-bastion-71852.herokuapp.com/api/allMessages`)
            .then(res => res.json())
            .then(users => {
                dispatch({
                    type: FETCH_MESSAGES_SUCCESSFULL,
                    payload: users
                })
            })
    }
}