import { Country } from "@customTypes/country";
import { Box, Button, Group, Image, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

interface CountryViewProps {
    country: Country;
}

function CountryView({ country }: CountryViewProps) {
    return (
        <Group noWrap>
            <Box sx={{ width: "50%" }}>
                <Image src={country.flag} alt={`${country.name} flag`} />
            </Box>
            <Box sx={{ width: "50%" }}>
                <Title sx={{ color: "#fff" }}>{country.name}</Title>
                <Group>
                    <Text>Border countries:</Text>
                    {country.borders.map((country) => (
                        <Link key={country.alpha3Code} to={`/rest-countries-api-mantine/country/${country.alpha3Code}`}>
                            <Button>{country.name}</Button>
                        </Link>
                    ))}
                </Group>
            </Box>
        </Group>
    );
}

export default CountryView;