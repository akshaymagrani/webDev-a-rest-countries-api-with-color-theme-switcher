import { selectCountry } from './store.tsx'
import CountryCard from "./CountryCard";
import { useSelector } from 'react-redux';

export default function CountryCards() {
    const data = useSelector(selectCountry);
    console.log(data);

    return (
        <div className='flex flex-wrap justify-evenly min-h-screen'>
            { 
                (data || []).map((country, index) => 
                    (<CountryCard key={index} countryData={country} />))
            }
        </div>
    );
}