import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'



class CountriesList extends Component {

    state = {
        countries: countries
    }

    render() {

        return (
            <div className="container">
                        <div className="row">
                            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                                <div className="list-group">
                                     {this.state.countries.map((country, index) => {
                                            return (
                                                <div key={country.cca3} className="list-group-item list-group-item-action" >
                                                <Link to={`/${country.cca3}`}>{country.name.common} </Link>
                                                </div> 
                                            )
                                         })
                                     }
                                </div>
                            </div>
                        </div>
                    </div>   
        )
    }
}



export default CountriesList