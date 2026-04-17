import countryData from '../api/countryApi.json'
export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are some Interesting Facts 
                <br />
                We're Proud of
            </h2>

            <div className="gradient-cards">
                {
                    countryData.map((country) => {
                        const {countryName, capital, population, interestingFact} = country;
                        return (
                            <div className="card">
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-description">Capital: </span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population: </span>
                                       {population}
                                    </p>
                                    <p>
                                        <span className="card-description">Interesting Fact: </span>
                                        {interestingFact}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                };
            </div>
        </section>
    )
}