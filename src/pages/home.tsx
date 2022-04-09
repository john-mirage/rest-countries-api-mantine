import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import UseCountries from "@hooks/use-countries";
import { Grid } from "@mantine/core";
import { range } from "lodash";

function Home() {
    const { data, isLoading, isError} = UseCountries();

    return (
        <>
            <ToolBar />
            <Grid gutter={40}>
                {isLoading
                    ? (
                        range(30).map((index) => (
                            <Grid.Col span={4} key={index}>
                                <CountryCardSkeleton />
                            </Grid.Col>
                        ))
                    )
                    : (
                        data.map((country) => (
                            <Grid.Col span={4} key={country.alpha3Code}>
                                <CountryCard />
                            </Grid.Col>
                        ))
                    )
                }
            </Grid>
        </>
    );
}

export default Home;