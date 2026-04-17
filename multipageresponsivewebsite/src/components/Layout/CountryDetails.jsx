import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState, useTransition } from "react"
import { getCountryDataDetail } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params= useParams();
    console.log(params);
    const [isPending, startTransition] = useTransition();
    const [countryDetail, setCountryDetail] = useState();

    useEffect(()=>{
        startTransition(async ()=>{
            const resp = await getCountryDataDetail(params.id);
            if(resp.status === 200){

                setCountryDetail(resp.data[0]);
                console.log(resp.data[0])
            }
            console.log('resp', resp)
        });  
    },[])

    if(isPending) return <Loader />;
    
    
    return ( 
        <section className="card country-details-card container">
            {countryDetail &&
                <div className="container-card bg-white-box">
                    <div className="country-image grid grid-two-cols">
                        <img src={countryDetail.flags[0]} alt='Image Not found' className="flag"/>

                        <div className="country-content">
                            <p className="card-title">{countryDetail.name.official}</p>
                            <div className="infoContainer">
                                <p className="card-description">
                                <span>Native Names: </span> 
                                {
                                    Object.keys(countryDetail.name.nativeName)
                                    .map((currKey) => countryDetail.name.nativeName[currKey].common)
                                    .join(',')
                                }  
                                </p>
                                <p>
                                    <span className="card-description">Population: </span> {countryDetail.population} 
                                </p>
                                <p>
                                    <span className="card-description"> Region: </span>
                                    {countryDetail.region}
                                </p>
                                <p>
                                    <span className="card-description"> Sub Region: </span>
                                    {countryDetail.subregion}
                                </p>
                                <p>
                                    <span className="card-description"> Capital: </span>
                                    {countryDetail.capital}
                                </p>
                                <p>
                                    <span className="card-description"> Top Level Domain:</span>
                                    {countryDetail.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description"> Currencies: </span>
                                    {
                                        Object.keys(countryDetail.currencies)
                                        .map((currCurrency) => countryDetail.currencies[currCurrency].name)
                                        .join(',')
                                    }
                                </p>
                                <p>
                                    <span className="card-description">Languages: </span> 
                                    {
                                        Object.keys(countryDetail.languages)
                                        .map((currLang) => countryDetail.languages[currLang])
                                        .join(',')
                                    }
                                </p>
                            </div>
                            <NavLink to='/country'>
                                <button>Go Back</button>
                            </NavLink>

                        </div>
                    </div>
                </div>
            }
        </section>
    )
}