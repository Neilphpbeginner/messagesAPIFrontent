import React, { useState } from 'react'
import NavigationDrawer from './NavigationDrawer'
import axios from 'axios';

export default function DeleteMessageId() {
    const [id, setId] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        await axios.delete(`https://guarded-bastion-71852.herokuapp.com/api/deleteMessageById`,
            {data: {'_id': id}}, { headers: { 'Content-type': 'application/json' } })
            .then(reponse => console.log(reponse))
            .then(setId(""))
            .catch(error => {
                throw error.reposne.data
            })
    }

    return (
        <div>
            <NavigationDrawer title="Delete Message by ID" />
            <div className="col-md-12 m-auto" styles={{
                width: '500%'
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="messageID">Delete Message</label>
                        <input type="text" onChange={event => { setId(event.target.value) }} name={id} className="form-control" id="messageID" aria-describedby="idHelp" placeholder="Enter ID of the message you would like to Delete" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">
                        Delete
                </button>
                </form>
            </div>
        </div >
    )
}
