import axios from 'axios';

export const deleteMessage = async (id) => {
    await axios.delete(`https://guarded-bastion-71852.herokuapp.com/api/deleteMessageById`,
        { "_id": parseInt(id) }, { headers: { 'Content-type': 'application/json' } })
        .then(reponse => console.log(reponse))
        .catch(error => {
            throw error.reposne.data
        })
}
export const newMessage = async ( event, subject, message) => {
    event.preventDefault();
    await axios.post(`https://guarded-bastion-71852.herokuapp.com/api/newMessage`,
        { 'subject': subject, 'message': message }, { headers: { 'Content-type': 'application/json' } })
        .then(response => console.log(response))
        .catch(error => console.log(error))
}
