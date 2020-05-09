import React, { useState } from 'react'
import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'
import FormControl from '@material-ui/core/FormControl'
import { InputLabel, Input, Button } from '@material-ui/core'
import axios from 'axios';

export function NewMessages() {
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.post(`https://guarded-bastion-71852.herokuapp.com/api/newMessage`,
            { 'subject': subject, 'message': message }, { headers: { 'Content-type': 'application/json' } })
            .then(response => console.log(response))
            .then(() => {
                setsubject("");
                setmessage("");
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <NavigationDrawer title="New Message" />
            <div style={{
                position: 'absolute',
                textAlign: 'center',
                top: '35%',
                right: '15%',
                left: '15%',
                width: '60%'
            }}>
                <form onSubmit={handleSubmit}>
                    <FormControl margin='dense' component='div' >
                        <InputLabel variant='standard'>Subject</InputLabel>
                        <Input type='type' value={subject} onChange={event => setsubject(event.target.value)} />
                    </FormControl>
                    <br />
                    <FormControl margin='dense' component='div' >
                        <InputLabel variant='standard'>Message</InputLabel>
                        <Input type='type' value={message} onChange={event => setmessage(event.target.value)} />
                    </FormControl>
                    <br />
                    <Button type="submit" variant="outlined" color="primary">
                        Submit
                </Button>
                </form>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => state

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessages)
