import axios from "axios";
import { useEffect, useState } from "react";

function UseCountries() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code");
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return {data, isLoading, isError};
}

export default UseCountries;