function countryDetails() {
    return (
        <main>
            <div className="container-fluid px-0 element-light-shadows">
                <div className="container1 d-flex justify-content-center justify-content-md-between py-4">
                    <h1 className="d-inline m-2 m-md-3 fs-3 fw-bold">Where in the World?</h1>
                    <button type='button' className="flex-nowrap d-flex btn border-0 bg-transparent align-items-center fs-4 fw-bold detail-themeChanger">
                        <label for="detail-btnDarkTheme" className="btn-themeChanger">
                            <input type='checkbox' id="detail-btnDarkTheme" className="detail-btn-theme-checkbox" name="btn-theme" />
                            <svg height="2.5em" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <g>
                                        <path d="M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1    c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2    c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z" />
                                    </g>
                                </g>
                            </svg>
                            <span>Dark Mode</span>
                        </label>
                    </button>
                </div>
            </div>

            <div className="div-detail-btn-back my-3 my-md-5">
                <button className="px-3 py-2 btn-back">
                    <a href="./index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        <span>Back</span>
                    </a>
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

export default countryDetails;