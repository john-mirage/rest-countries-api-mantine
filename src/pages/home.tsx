import CountryCard from "@components/country-card";
import CountryCardSkeleton from "@components/country-card-skeleton";
import ToolBar from "@components/tool-bar";
import { HomeCountry } from "@customTypes/country";
import UseCountries from "@hooks/use-countries";
import { Grid } from "@mantine/core";
import { isEmpty, range } from "lodash";

const COUNTRIES_API_URL = "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code";

function Home() {
    const [{ allCountries, countries, isLoading, isError }, setUrl, setPage] = UseCountries(COUNTRIES_API_URL);

    function handleRegion(newRegion: string | undefined) {
        if (!!newRegion) {
            setUrl(`https://restcountries.com/v2/region/${newRegion}?fields=name,population,region,capital,flags,alpha3Code`);
        } else {
            setUrl(COUNTRIES_API_URL);
        }
    }

    return (
        <>
            <ToolBar countries={allCountries} handleRegion={handleRegion} />
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