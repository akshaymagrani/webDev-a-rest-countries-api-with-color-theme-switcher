import { useQuery } from "@tanstack/react-query";
import CountryCard from "./CountryCard";

export default function CountryCards() {
    // eslint-disable-next-line
    const {data: countries, isLoading} = useQuery({
        queryKey: ["countries"],
        queryFn: () => fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
    });
    console.log(countries);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex flex-wrap justify-evenly'>
            { 
                countries.map((country) => 
                    (<CountryCard key={country.cca2} countryData={country} />))
                    .slice(0, 20)
                    .sort((a,b) => a.name.localeCompare(b.name))
            }
        </div>
    );
}