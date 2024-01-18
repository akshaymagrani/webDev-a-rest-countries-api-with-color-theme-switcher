import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCountry } from "./store.tsx";
function Details() {
    const params = useParams();
    const data = useSelector(selectCountry);

    // Use params.id to get the country name from the route
    const selectedCountry = data.find(country => country.name.common === params.id);
    console.log(selectedCountry);
    if (!selectedCountry) {
        return <div>Country not found</div>;
    }

    // Destructure properties from the selected country
    const {
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
        flags,
    } = selectedCountry;

    // Check if nativeName is defined before accessing its keys
    const nativeNameKeys = name.nativeName ? Object.keys(name.nativeName) : [];
    let nestedPropertyCommon;

    for (const key of nativeNameKeys) {
        if (name.nativeName[key]?.common) {
            nestedPropertyCommon = name.nativeName[key].common;
            break;
        }
    }

    const currencyKeys = currencies ? Object.keys(currencies) : [];
    let nestedCurrency;

    for (const key of currencyKeys) {
        if (currencies[key]?.name) {
            nestedCurrency = currencies[key].name;
            break;
        }
    }

    const languageKeys = languages ? Object.keys(languages) : [];
    let nestedLanguages = [];

    for (const key of languageKeys) {
        nestedLanguages.push(languages[key]);
    }

    const tldKeys = tld ? Object.keys(tld) : [];
    let nestedtld = [];

    for (const key of tldKeys) {
        nestedtld.push(tld[key]);
    }

    return (
        <main>
            <div className="div-detail-btn-back my-3 my-md-5">
                <button className="px-3 py-2 btn-back">
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        <span>Back</span>
                    </Link>
                </button>
            </div>

            <div className="row flex justify-content-lg-between flex-wrap align-items-center mx-3 my-5 mx-md-auto div-detail-country">
                <div className="div-image">
                    <img src={flags.svg} className="card-img-top countryImage p-0" alt="Country Image" />
                </div>
                <div className="text-left div-detail-card-body p-md-5 bg-body-light-theme">
                    <h4 className="card-title my-4 fw-bold country">Country</h4>
                    <div className="row">
                        <div className="div-card-body-width">
                            <p className="card-text fw-bold mb-1">Native Name:
                                {nestedCurrency ? <span className="name fw-light"> {nestedPropertyCommon}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Population:
                                {population ? <span className="population fw-light"> {population.toLocaleString("en-US")}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Region:
                                {region ? <span className="region region fw-light"> {region}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Sub Region:
                                {subregion ? <span className="subregion fw-light"> {subregion}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Capital:
                                {capital ? <span className="capital fw-light"> {capital}</span> : <span></span>}
                            </p>
                        </div>
                        <div className="div-card-body-width my-4 mt-md-0">
                            <p className="card-text fw-bold mb-1">Top Level Domain:
                                {tld ? <span className="topLevelDomain fw-light"> {nestedtld}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Currencies:
                                {nestedCurrency ? <span className="currencies fw-light"> {nestedCurrency}</span> : <span></span>}
                            </p>
                            <p className="card-text fw-bold mb-1">Languages:
                                {languages ? <span className="languages fw-light"> {nestedLanguages[0]}</span> : <span></span>}
                                {languages ? <span className="languages fw-light"> {nestedLanguages[1]}</span> : <span></span>}
                            </p>
                        </div>
                    </div>
                    <h5 className="card-text fw-bold my-md-5">Border Countries: </h5>
                    {borders[0] ? <span className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows">{borders[0]}</span> : <span></span> }
                    {borders[1] ? <span className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows">{borders[1]}</span> : <span></span>}
                    {borders[2] ? <span className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows">{borders[2]}</span> : <span></span>}
                </div>
            </div>

        </main>
    );
}

export default Details;