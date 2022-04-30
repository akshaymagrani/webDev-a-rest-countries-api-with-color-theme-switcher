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

// obtaining unique region values from the fetched data using 'set' and inserting the same in options tag in index.html
const germany = getCountries();
let setName = new Set();
let setRegion = new Set();
let setCapital = new Set();
let setPopulation = new Set();
germany.then((myJsonData) => {
    for (let i = 0; i < myJsonData.length; i++){
        setName.add(myJsonData[i][0].name);
        setCapital.add(myJsonData[i][0].capital);
        setRegion.add(myJsonData[i][0].region);
        setPopulation.add(myJsonData[i][0].population);
    }
    const iterSetRegion = setRegion.entries();
    console.log(iterSetRegion);
    return iterSetRegion;
}).then((iterSetRegion) => {
    let filter = document.getElementById("filter");
    for (const entry of iterSetRegion){
        console.log(entry);
        let option = document.createElement('option');
        option.setAttribute('value', entry[0]);
        option.innerText = entry[0] + " ";
        filter.appendChild(option);
    }
    return iterSetRegion;
});

let filterBtn = document.querySelector('#filter');
let card = document.getElementsByClassName('card');
console.log(card);
async function ex() {
    let output = await filterBtn.value;
    let cardRegion = document.getElementsByClassName('Region');
    let cardRegionValue = await cardRegion.innerHTML;
    console.log(cardRegion);
    for (let i = 0; i < card.length; i++) {
        if (output === 'Filter by Region') {
            card[i].classList.remove('d-none');
        }
        else if(output !== cardRegion[i].innerHTML) {
            card[i].classList.add('d-none');
        }
        else{
            card[i].classList.remove('d-none');
        }
    }
    console.log(output);
};

filterBtn.addEventListener('click', ex);

let searchBtn = document.getElementById('search');
let outputSearch = searchBtn.value;
console.log(outputSearch);
searchBtn.addEventListener("keypress", searchBox);

function searchBox (event) {
    
    // console.log(event.key);
}

// setting values from fetch

const countries = getCountries();
countries.then((myJsonData) => {
    let image = document.getElementsByClassName('image');
    let country = document.getElementsByClassName('Country');
    let population = document.getElementsByClassName('Population');
    let region = document.getElementsByClassName('Region');
    let capital = document.getElementsByClassName('Capital');

    for (let i = 0; i < myJsonData.length; i++){
        image[i].src = myJsonData[i][0].flags.png;
        country[i].innerHTML = myJsonData[i][0].name;
        population[i].innerHTML = myJsonData[i][0].population;
        region[i].innerHTML = myJsonData[i][0].region;
        capital[i].innerHTML = myJsonData[i][0].capital;
    }
    localStorage.setItem('myCountryJsonData', country);
});

let aTag = document.getElementsByTagName('a');
console.log(aTag);
for (let i = 0; i < aTag.length; i++){
    aTag[i].addEventListener("click", () => {
        localStorage.setItem('cardId', aTag[i].getAttribute("data-card-value"));
    });
}
let btnTheme = document.getElementById("btnDarkTheme");
function themeStatus() {
    localStorage.setItem('themeStatusDark', btnTheme.checked);
    console.log(btnTheme.checked);
}
btnTheme.addEventListener('click', themeStatus);

// when a card is clicked
// -> export the JSON data related with the card country to default.js
//      -> don't know enough about export.
//          -> Read the MDN export docs and summarize the knowledge.
// -> import said data into default.js and display it on the screen.
//      -> don't know enough about import.
//          -> Read the MDN export docs and summarize the knowledge.

let h = localStorage.getItem('cardId');
console.log(h);



