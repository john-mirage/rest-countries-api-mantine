import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import { HomeCountry } from "@customTypes/country";
import UseCountries from "@hooks/use-countries";
import { Box, Center, createStyles, Pagination, SimpleGrid } from "@mantine/core";
import { useIntersection, usePagination, useWindowScroll } from "@mantine/hooks";
import { isEmpty, range } from "lodash";
import { useEffect, useState } from "react";

const COUNTRIES_PER_PAGE = 20;

const useStyles = createStyles((theme) => ({
    grid: {
        [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
            paddingLeft: 40,
            paddingRight: 40,
        },

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            padding: 0,
        },
    },
    moreTrigger: {
        width: "100%",
        height: 128,
    }
}));

function getPageTotal(dataNumber: number) {
    const division = (dataNumber / COUNTRIES_PER_PAGE);
    const hasMore = (dataNumber % COUNTRIES_PER_PAGE) !== 0;
    const basePageNumber = Math.floor(division);
    return hasMore ? (basePageNumber + 1) : basePageNumber;
}

function Home() {
    const { classes } = useStyles();
    const [{ allCountries, countries, isLoading, isError }, setRegion] = UseCountries();
    const [pageTotal, setPageTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [scroll, scrollTo] = useWindowScroll();

    const pagination = usePagination({
        total: pageTotal,
        page: page,
        onChange: setPage,
    });

    useEffect(() => {
        const total = getPageTotal(countries.length);
        setPageTotal(total);
        setPage(1);
    }, [countries]);

    const startPage = (pagination.active - 1) * COUNTRIES_PER_PAGE;
    const endPage = ((pagination.active - 1) * COUNTRIES_PER_PAGE) + COUNTRIES_PER_PAGE;

    function handlePageChange(newPage: number) {
        scrollTo({ y: 0 });
        setPage(newPage);
    }

    return (
        <>
            <ToolBar
                countries={allCountries}
                handleRegion={setRegion}
            />
            <SimpleGrid
                className={classes.grid}
                breakpoints={[
                    { maxWidth: "xs", cols: 1, spacing: 40 },
                    { minWidth: "xs", cols: 1, spacing: 40 },
                    { minWidth: "sm", cols: 2, spacing: 40 },
                    { minWidth: "md", cols: 3, spacing: 40 },
                    { minWidth: "xl", cols: 4, spacing: 75 },
                ]}
            >
                {isLoading || isEmpty(countries)
                    ? (
                        range(COUNTRIES_PER_PAGE).map((index) => (
                            <CountryCardSkeleton key={index} />
                        ))
                    )
                    : (
                        countries.slice(startPage, endPage).map((country: HomeCountry) => (
                            <CountryCard key={country.alpha3Code} country={country} />
                        ))
                    )
                }
            </SimpleGrid>
            <Center my={48}>
                <Pagination
                    total={pageTotal}
                    page={page}
                    onChange={handlePageChange}
                />
            </Center>
        </>
    );
}

export default Home;