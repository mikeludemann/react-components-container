import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPerson from './allPerson';
import DetailPerson from './detailPerson';

class Person extends Component {
	render() {
		return (
			<Switch>
                <Route exact path='/person' component={AllPerson}/>
                <Route path='/person/:id' component={DetailPerson}/>
            </Switch>
		)
    }
}

export default Person
