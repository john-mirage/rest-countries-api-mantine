import axios from "axios";
import { useEffect, useState } from "react";

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
                if (!region) {
                    const { data } = await axios("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code");
                    if (!didCancel) {
                        setCountries(data);
                        if (!calledOnce) {
                            setAllCountries(data);
                            setIsCalledOnce(true);
                        }
                    }
                } else {
                    const { data } = await axios(`https://restcountries.com/v2/region/${region}?fields=name,population,region,capital,flags,alpha3Code`);
                    if (!didCancel) setCountries(data);
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