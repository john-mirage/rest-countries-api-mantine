import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import { HomeCountry } from "@customTypes/country";
import UseCountries from "@hooks/use-countries";
import { Box, Grid } from "@mantine/core";
import { useIntersection } from "@mantine/hooks";
import { isEmpty, range } from "lodash";
import { useEffect, useState } from "react";

const COUNTRIES_PER_PAGE = 15;

function Home() {
    const [{ allCountries, countries, isLoading, isError }, setRegion] = UseCountries();
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState(0);
    const [pageCountries, setPageCountries] = useState([]);
    const [ref, observer] = useIntersection();

    useEffect(() => {
        if (countries.length > 0) {
            const division = (countries.length / COUNTRIES_PER_PAGE);
            const hasMore = (countries.length % COUNTRIES_PER_PAGE) !== 0;
            const basePageNumber = Math.floor(division);
            setPageNumber(hasMore ? (basePageNumber + 1) : basePageNumber);
            setPage(1);
        }
    }, [countries]);

    useEffect(() => {
        if (page > 0) {
            if (page < pageNumber) {
                const countryNumber = page * COUNTRIES_PER_PAGE;
                const newpageCountries = countries.slice(0, countryNumber);
                setPageCountries(newpageCountries);
            } else {
                setPageCountries(countries);
            }
        }
    }, [countries, page, pageNumber]);

    useEffect(() => {
        if (observer?.isIntersecting && page < pageNumber) {
            setPage(page + 1);
        }
    }, [observer?.isIntersecting]);

    return (
        <>
            <ToolBar countries={allCountries} handleRegion={setRegion} />
            <Grid gutter={40}>
                {isLoading || isEmpty(countries)
                    ? (
                        range(30).map((index) => (
                            <Grid.Col span={4} key={index}>
                                <CountryCardSkeleton />
                            </Grid.Col>
                        ))
                    )
                    : (
                        pageCountries.map((country: HomeCountry) => (
                            <Grid.Col span={4} key={country.alpha3Code}>
                                <CountryCard country={country} />
                            </Grid.Col>
                        ))
                    )
                }
            </Grid>
            <Box ref={ref} sx={{ height: 64 }} />
        </>
    );
}

export default Home;