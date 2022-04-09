import axios from "axios";
import { useEffect, useState } from "react";

function UseCountry(countryCode: string) {
    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const countryResult = await axios(`https://restcountries.com/v2/alpha/${countryCode}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag`);
                const borderCountries = await Promise.all(countryResult.data.borders.map(async (borderCountryCode: string) => {
                    let borderResult = await axios(`https://restcountries.com/v2/alpha/${borderCountryCode}?fields=name,alpha3code`);
                    return borderResult.data;
                }));
                if (!didCancel) {
                    setCountry({...countryResult, borders: borderCountries });
                }
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
        return () => {
            didCancel = true;
        };
    }, []);

    return { country, isLoading, isError };
}

export default UseCountry;