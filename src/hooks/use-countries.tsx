import axios from "axios";
import { useEffect, useState } from "react";

const COUNTRIES_API_URL = "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code";

function UseCountries() {
    const [region, setRegion] = useState(null);
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [calledOnce, setIsCalledOnce] = useState(false);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                if (!calledOnce) {
                    const { data } = await axios(COUNTRIES_API_URL);
                    if (!didCancel) {
                        setCountries(data);
                        setAllCountries(data);
                        setIsCalledOnce(true);
                    }
                } else if (region) {
                    const { data } = await axios(`https://restcountries.com/v2/region/${region}?fields=name,population,region,capital,flags,alpha3Code`);
                    if (!didCancel) setCountries(data);
                } else {
                    setCountries(allCountries);
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
    }, [region]);

    return [{ allCountries, countries, isLoading, isError }, setRegion];
}

export default UseCountries;