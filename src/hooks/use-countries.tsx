import axios from "axios";
import { chunk, flatten } from "lodash";
import { useEffect, useRef, useState } from "react";

function UseCountries() {
    const [countries, setCountries] = useState([]);
    const [pages, setPages] = useState([[]]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const didMount = useRef(false);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code");
                if (!didCancel) {
                    setPages(chunk(result.data, 30));
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

    useEffect(() => {
        if (didMount.current) {
            setCountries(flatten(pages.slice(0, page)));
        } else {
            didMount.current = true;
        }
    }, [pages, page]);

    return [{ countries, isLoading, isError }, setPage];
}

export default UseCountries;