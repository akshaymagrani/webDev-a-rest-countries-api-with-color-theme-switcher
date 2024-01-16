import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCountry } from "./store.tsx";
function CountryCard({ countryData }, props) {
    const { name, capital, population, region, flags, continents } = countryData;
    return (
        <Link to={`details/${name.common}`} className="w-[300px]">
            <div className="card m-3 shadow rounded-md" onClick={props.handleClick}>
                <img src={flags.svg} className="card-img-top image" alt="Flag" />
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
                        <span className="Capital fw-light">{capital} {continents[0]}</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard;