import { setSearch , selectSearch, setFilter, selectFilter } from './store.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountry } from './store.tsx';

export function SearchAndFilter() {
    const country = useSelector(selectCountry);
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();

    const filter = useSelector(selectFilter);

    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex input-group my-4 shadow ui-widget items-center">
                <span className="input-group-text">
                    <svg id="Editable-line" version="1.1" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg" className="search">
                        <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" stroke-linecap="round"
                            stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        <line fill="none" id="XMLID_44_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-miterlimit="10" stroke-width="2" x1="27" x2="20.366" y1="27" y2="20.366" />
                    </svg>
                </span>
                <label htmlFor="search">
                    <input 
                        type="text" 
                        id="search" 
                        className="form-control p-1" 
                        placeholder="Search for a country" 
                        value={search}
                        onChange={(event) => dispatch(setSearch(event.target.value))}
                        />
                </label>
            </div>
            <label htmlFor="filter" className="py-4 bg-elements-light-them">
                <select id="filter" placeholder="Filter by region" className="element-light-shadows bg-elements-light-theme" value={filter} onChange={(event) => dispatch(setFilter(event.target.value))}>
                    <option value={""}>Filter by Region</option>
                    {
                        (country ?? []).reduce((acc, current) => {
                            if (!acc.find(item => item === current.continents[0])) {
                                acc.push(current.continents[0]);
                            }
                            return acc;
                        }, []).map((continent, index) => (
                            <option key={index} value={continent}>{continent}</option>
                        ))
                    }
                </select>
            </label>
        </div>
    )
}