import { Country } from "@customTypes/country";
import { Box, Button, Group, Image, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { TypographyStylesProvider } from '@mantine/core';

interface CountryViewProps {
    country: Country;
}

const formatter = new Intl.NumberFormat("en-US");

function CountryView({ country }: CountryViewProps) {
    return (
        <Group noWrap mt={32}>
            <Box sx={{ width: "50%" }}>
                <Image src={country.flag} alt={`${country.name} flag`} />
            </Box>
            <Box sx={{ width: "50%" }}>
                <TypographyStylesProvider>
                    <Title>{country.name}</Title>
                    <Group noWrap align="flex-start" mb={64}>
                        <Box sx={{ width: "50%" }}>
                            <Text weight={600}>Native Name: <Text weight={300} component="span">{country.nativeName}</Text></Text>
                            <Text weight={600}>Population: <Text weight={300} component="span">{formatter.format(country.population)}</Text></Text>
                            <Text weight={600}>Region: <Text weight={300} component="span">{country.region}</Text></Text>
                            <Text weight={600}>Sub Region: <Text weight={300} component="span">{country.subregion}</Text></Text>
                            <Text weight={600}>Capital: <Text weight={300} component="span">{country.capital}</Text></Text>
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <Text weight={600}>Top Level Domain: <Text weight={300} component="span">{country.topLevelDomain.join(", ")}</Text></Text>
                            <Text weight={600}>Currencies: <Text weight={300} component="span">{country.currencies.map((currency) => currency.name).join(", ")}</Text></Text>
                            <Text weight={600}>Languages: <Text weight={300} component="span">{country.languages.map((language) => language.name).join(", ")}</Text></Text>
                        </Box> 
                    </Group>
                    <Group>
                        <Text weight={600}>Border countries:</Text>
                        {country.borders.map((country) => (
                            <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
                                <Button color="gray">{country.name}</Button>
                            </Link>
                        ))}
                    </Group>
                </TypographyStylesProvider>
            </Box>
        </Group>
    );
}

export default CountryView;