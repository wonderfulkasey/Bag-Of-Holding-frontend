import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Preferences from '../components/Preferences'


class DashboardContainer extends React.Component {


    render() {
        return (
            <div>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/preferences' component={Preferences} />
                </Switch>
             </div>
        )
    }

}

//a function
//returns a plain object containing data
//for connected comp
//is called whenever the redux store changes



export default DashboardContainer