import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";
export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState('all');
    useEffect(()=>{
       startTransition(async ()=>{
            const resp = await getCountryData();
            setCountries(resp.data);
            console.log(resp.data);
       });  
    },[])

    const searchCountry = (country) => {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }
    const filterRegion = (country) => {
        if(filter ==='all') return country;
        return country.region === filter;

    }
    // filter() expects the callback to return true or false
    // true → keep the element
    // false → remove it
    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

    if(isPending) return <Loader />;
    return (
        <section className="country-section">
            <SearchFilter 
                search={search} 
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />
            <ul  className="grid grid-four-cols" >
                {
                    filterCountries.map((currCountry, key={index}) => {
                        return <CountryCard country={currCountry}/>;
                    })
                }
            </ul>
        </section>
    )
}