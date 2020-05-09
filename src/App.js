import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationDrawer from './components/NavigationDrawer'
import { withRouter } from 'react-router'

export class App extends Component {
    render() {
        return (
            <div>
                <NavigationDrawer title="Home Page" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
