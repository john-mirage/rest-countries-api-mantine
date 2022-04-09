import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import { HomeCountry } from "@customTypes/country";
import UseCountries from "@hooks/use-countries";
import { Box, Button, Center, Grid } from "@mantine/core";
import { isEmpty, range } from "lodash";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const COUNTRIES_PER_PAGE = 30;

function Home() {
    const [{ allCountries, countries, isLoading, isError }, setRegion] = UseCountries();
    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState(0);
    const [pageCountries, setPageCountries] = useState([]);
    const { ref, inView } = useInView();

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
    }, [countries, page]);

    useEffect(() => {
        if (inView) {
            if (page < pageNumber) {
                setPage(page + 1);
            }
        }
    }, [inView]);

    return (
        <>
            <ToolBar countries={allCountries} handleRegion={setRegion} />
            <Grid gutter={40}>
                {isLoading && isEmpty(countries)
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