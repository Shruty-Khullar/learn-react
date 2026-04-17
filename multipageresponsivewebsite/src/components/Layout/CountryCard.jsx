import {NavLink} from 'react-router-dom'
export const CountryCard = ({country}) => {
    const {flags, name, population, region, capital} = country;
    return (
        
        <li className="country-card card">
            <div className="container-card bg-white">
                <img src={flags[0]} alt='flag not available'/>
                
                <div className="countryInfo">
                    <p className="card-title">{name.common.length>10 ? name.common.slice(0,10)+'...': name.common}</p>
                    <p>
                        <span className="card-description">Population: </span> {population}
                    </p>
                    <p>
                        <span className="card-description">Region: </span> {region}
                    </p>
                    <p>
                        <span className="card-description">Capital: </span> {capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                        <button>
                            Read More
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}