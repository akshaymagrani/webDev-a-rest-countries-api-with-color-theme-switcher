function CountryCard({ countryData }) {
    const { name, capital, population, region, flags } = countryData;
    return (
        <a href="./detail.html" className="w-[300px]">
            <div className="card m-3 shadow rounded-md">
                <img src={flags.svg} className="card-img-top image" alt="Algeria Flag" />
                <div className="card-body p-3">
                    <h5 className="card-title mb-4 Country">Country:  
                        {name.common}
                    </h5>
                    <p className="card-text fw-bold mb-1">Population: 
                        <span className="Population fw-light">{population}</span>
                    </p>
                    <p className="card-text fw-bold mb-1">Region: 
                        <span className="Region region fw-light">{region}</span>
                    </p>
                    <p className="card-text fw-bold mb-1">Captial: 
                        <span className="Capital fw-light">{capital}</span>
                    </p>
                </div>
            </div>
        </a>
    )
}

export default CountryCard;