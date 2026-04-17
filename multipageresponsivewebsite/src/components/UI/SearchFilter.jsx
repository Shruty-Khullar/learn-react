export const SearchFilter = ({filter, setFilter, search, setSearch, countries, setCountries}) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    }
    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const sortCountries = (order) => {
        const sortCountry = [...countries].sort((a,b) => {
            return order === "asc" 
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        });
        setCountries(sortCountry);
    }
    return <section className="section-searchFilter container">
        <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
        />
        
        <div>
            <button onClick={()=>sortCountries("asc")}>
                Ascending
            </button>
        </div>

        <div>
            <button onClick={()=>sortCountries("desc")}>
                Descending
            </button>
        </div>

        {/* The built-in browser <select> component lets you render a select box with options. */}
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
   
    </section>
}