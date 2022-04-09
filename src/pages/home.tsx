import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import { HomeCountry } from "@customTypes/country";
import UseCountries from "@hooks/use-countries";
import { Grid } from "@mantine/core";
import { isEmpty, range } from "lodash";

function Home() {
    const { countries, isLoading, isError} = UseCountries();

    return (
        <>
            <ToolBar countries={countries} />
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
                        countries.map((country: HomeCountry) => (
                            <Grid.Col span={4} key={country.alpha3Code}>
                                <CountryCard country={country} />
                            </Grid.Col>
                        ))
                    )
                }
            </Grid>
        </>
    );
}

export default Home;