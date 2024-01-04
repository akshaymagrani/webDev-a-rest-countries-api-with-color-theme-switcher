function CountryCard(props) {
    console.log(props);
    return (
        <a href="./detail.html" data-card-value="6">
            <div className="card m-3 element-light-shadows" data-card-value="7">
                <img src="./images/image-placeholder.png" className="card-img-top image" alt="Algeria Flag Image" />
                <div className="card-body">
                    <h5 className="card-title mb-4 Country">Country: {props.name}</h5>
                    <p className="card-text fw-bold mb-1">Population:
                        <span className="Population fw-light">{props.population}</span>
                    </p>
                    <p className="card-text fw-bold mb-1">Region:
                        <span className="Region region fw-light">{props.region}</span>
                    </p>
                    <p className="card-text fw-bold mb-1">Captial:
                        <span className="Capital fw-light">{props.capital}</span>
                    </p>
                </div>
            </div>
        </a>
    );
}

export default CountryCard;