import { useEffect, useState } from "react";

const DATAS_PER_PAGES = 30;

function UsePagination(totalItems: number) {
    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const division = (data.length / DATAS_PER_PAGES);
        const hasMore = (data.length % DATAS_PER_PAGES) !== 0;
        const basePageNumber = Math.floor(division);
        setPageNumber(hasMore ? (basePageNumber + 1) : basePageNumber);
        if (page > 0) setPage(0);
        setPage(1);
    }, [data]);

    useEffect(() => {
        if (page > 0) {
            if (page < pageNumber) {
                const countryNumber = page * DATAS_PER_PAGES;
                const newPageData = data.slice(0, countryNumber);
                setPageData(newPageData);
            } else if (page === pageNumber) {
                setPageData(data);
            }
        }
    }, [page]);

    return [pageData, setData, setPage];
}

export default UsePagination;