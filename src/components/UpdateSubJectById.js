import React, { Component, } from 'react'
import NavigationDrawer from './NavigationDrawer'
import { Input, Button, FormLabel, FormControl } from '@material-ui/core';
import axios from 'axios'

export default class UpdateSubJectById extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 0,
            subject: ""
        }
        this.formInputFields = this.formInputFields.bind(this);
        this.updateSubjectById = this.updateSubjectById.bind(this);
    }

    formInputFields(event) {
        this.setState({
            _id: parseInt(event.target.value),
            subject: event.target.value
        })
    }

    updateSubjectById(event) {
        event.preventDefault();
        axios.put(`https://guarded-bastion-71852.herokuapp.com/api/updateSubjectById`, { '_id': this.state._id, 'subject': this.state.subject })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <NavigationDrawer title="Update Message Subject By Id" />
                <br />
                <form onSubmit={this.updateSubjectById} >
                    <FormControl>
                        <FormLabel>Update Suject</FormLabel>
                             Message ID <Input type='text' name='_id' onChange={this.formInputFields} />
                             New Subject<Input type='text' name='subject' onChange={this.formInputFields} />
                        <Button variant="outlined" color="primary" type="submit">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </div>
        )
    }
}
