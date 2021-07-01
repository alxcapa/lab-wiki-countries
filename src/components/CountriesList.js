import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'

// function CountriesList() {

//     return <nav> <Link to='/'> </Link> </nav>
// }

class CountriesList extends Component {

    state = {
        countries: countries
    }

    render() {

        return (
            this.state.countries.map(country => {
                return <Link>{country.name.common} </Link>
            })
        )
    }
}



export default CountriesList