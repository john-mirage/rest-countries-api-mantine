import axios from "axios";
import { useEffect, useState } from "react";

function UseCountries() {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code");
                if (!didCancel) {
                    setCountries(result.data);
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

    return { countries, isLoading, isError };
}

export default UseCountries;