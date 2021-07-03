import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import countries from '../countries.json'

class CountryDetails extends Component {
  render() {
    const getCountry = (cca3) => {
      const theCountry = (oneCountry) => {
        return oneCountry.cca3 === cca3;
      };
      return countries.find(theCountry);
    };

    const { params } = this.props.match;
    const foundCountry = getCountry(params.cca3);
    
    return (
      <div>
        <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((country) => {
                        
                      return (
                        <li key={country.cca3}>
                          <Link to={`/${country}`}>{getCountry(country).name.common}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
