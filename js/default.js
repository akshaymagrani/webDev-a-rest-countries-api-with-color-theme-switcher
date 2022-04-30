async function getCountries(){
    let germany = await fetch("https://restcountries.com/v2/name/germany");
    let usa = await fetch("https://restcountries.com/v2/name/usa");
    let brazil = await fetch("https://restcountries.com/v2/name/brazil");
    let iceland = await fetch("https://restcountries.com/v2/name/iceland");
    let afghanistan = await fetch("https://restcountries.com/v2/name/afghanistan");
    let nigeria = await fetch("https://restcountries.com/v2/name/nigeria");
    let albania = await fetch("https://restcountries.com/v2/name/albania");
    let algeria = await fetch("https://restcountries.com/v2/name/algeria");   

    let myJsonGermanyData = await germany.json(); // 0
    console.log(typeof(country), myJsonGermanyData);

    let myJsonUSAData = await usa.json(); // 1
    console.log(typeof(country), myJsonUSAData);

    let myJsonBrazilData = await brazil.json(); // 2
    console.log(typeof(country), myJsonBrazilData);

    let myJsonIcelandData = await iceland.json(); // 3
    console.log(typeof(country), myJsonIcelandData);

    let myJsonAfghanistanData = await afghanistan.json(); // 4
    console.log(typeof(country), myJsonAfghanistanData);

    let myJsonNigeriaData = await nigeria.json(); // 5
    console.log(typeof(country), myJsonNigeriaData);
    
    let myJsonAlgeriaData = await algeria.json(); // 6
    console.log(typeof(country), myJsonAlgeriaData);

    let myJsonAlbaniaData = await albania.json(); // 7
    console.log(typeof(country), myJsonAlbaniaData);

    let myJsonCountriesData = [myJsonGermanyData,myJsonUSAData,myJsonBrazilData,myJsonIcelandData,myJsonAfghanistanData,myJsonNigeriaData,myJsonAlgeriaData,myJsonAlbaniaData];

// = Format for Rest API for country data to obtain obly limited info:
    // obtaining rest api data for all the countries
    // let data = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,flag');
    // let dataJson = await data.json();

    // return dataJson;
// =========================

    return myJsonCountriesData; //in the end return an array of all the countries.
}

let countries = getCountries();
let i = localStorage.getItem('cardId');
    console.log(i);
countries.then((myJsonData) => {
    let i = localStorage.getItem('cardId');
    console.log(i);
    let countryImage = document.getElementsByClassName('countryImage');
    let country = document.getElementsByClassName('country');
    let name = document.getElementsByClassName('name');
    let population = document.getElementsByClassName('population');
    let region = document.getElementsByClassName('region');
    let subregion = document.getElementsByClassName('subregion');
    let capital = document.getElementsByClassName('capital');

    let topLevelDomain = document.getElementsByClassName('topLevelDomain');
    let currencies = document.getElementsByClassName('currencies');
    let languages = document.getElementsByClassName('languages');

    let borderCountries = document.getElementsByClassName('borderCountries');

    countryImage[0].src = myJsonData[i][0].flags.png;
    country[0].innerHTML = myJsonData[i][0].name;
    name[0].innerHTML = myJsonData[i][0].name;
    population[0].innerHTML = myJsonData[i][0].population;
    region[0].innerHTML = myJsonData[i][0].region;
    subregion[0].innerHTML = myJsonData[i][0].subregion;
    capital[0].innerHTML = myJsonData[i][0].capital;

    topLevelDomain[0].innerHTML = myJsonData[i][0].topLevelDomain;
    currencies[0].innerHTML = myJsonData[i][0].currencies[0].name;
    languages[0].innerHTML = myJsonData[i][0].languages[0].name;

    for (let i = 0; i < myJsonData[i][0].borders[0].length; i++){
        borderCountries[i].innerHTML = myJsonData[i][0].borders[i];    
    }
    
});