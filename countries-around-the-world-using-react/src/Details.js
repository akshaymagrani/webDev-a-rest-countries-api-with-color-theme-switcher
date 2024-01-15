import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCountry } from "./store.tsx";
function Details() {
    const p = useParams();
    console.log(p);
    const data = useSelector(selectCountry);
    console.log(data);
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
                    <img src="./images/image-placeholder.png" className="card-img-top countryImage p-0" alt="Country Image" />
                </div>
                <div className="text-left div-detail-card-body p-md-5 bg-body-light-theme">
                    <h4 className="card-title my-4 fw-bold country">Country</h4>
                    <div className="row">
                        <div className="div-card-body-width">
                            <p className="card-text fw-bold mb-1">Native Name:
                                <span className="name fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Population:
                                <span className="population fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Region:
                                <span className="region region fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Sub Region:
                                <span className="subregion fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Captial:
                                <span className="capital fw-light"></span>
                            </p>
                        </div>
                        <div className="div-card-body-width my-4 mt-md-0">
                            <p className="card-text fw-bold mb-1">Top Level Domain:
                                <span className="topLevelDomain fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Currencies:
                                <span className="currencies fw-light"></span>
                            </p>
                            <p className="card-text fw-bold mb-1">Languages:
                                <span className="languages fw-light"></span>
                            </p>
                        </div>
                    </div>
                    <h5 className="card-text fw-bold my-md-5">Border Countries: </h5>
                    <br />
                    <p className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows"></p>
                    <p className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows"></p>
                    <p className="borderCountries fw-light px-3 py-2 my-2 d-inline-block bg-elements-light-theme element-light-shadows"></p>
                </div>
            </div>

        </main>
    );
}

export default Details;