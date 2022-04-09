import axios from "axios";
import { useEffect, useState } from "react";

const COUNTRIES_PER_PAGES = 30;

function getPageNumber(countryNumber: number) {
    const division = (countryNumber / COUNTRIES_PER_PAGES);
    const hasMore = (countryNumber % COUNTRIES_PER_PAGES) !== 0;
    const basePageNumber = Math.floor(division);
    return hasMore ? (basePageNumber + 1) : basePageNumber;
}

function UseCountries(initialUrl: string) {
    const [url, setUrl] = useState(initialUrl);
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const { data } = await axios(url);
                if (!didCancel) {
                    const pageNumber = getPageNumber(data.length);
                    setPages(pageNumber);
                    setAllCountries(data);
                    if(page > 0) setPage(0);
                    setPage(1);
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
    }, [url]);

    useEffect(() => {
        if (page > 0) {
            if (page < pages) {
                const countryNumber = page * COUNTRIES_PER_PAGES;
                const pageCountries = allCountries.slice(0, countryNumber);
                setCountries(pageCountries);
            } else if (page === pages) {
                setCountries(allCountries);
            }
        }
    }, [page]);

    return [{ allCountries, countries, isLoading, isError }, setUrl, setPage];
}

export default UseCountries;