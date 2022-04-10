import { HomeCountry } from "@customTypes/country";
import { Card, Image, Text, Title } from "@mantine/core";

interface CountryCardProps {
    country: HomeCountry;
}

const formatter = new Intl.NumberFormat("en-US");

function CountryCard({ country }: CountryCardProps) {
    return (
        <Card shadow="sm" sx={{ height: "100%" }}>
            <Card.Section mb={16} component="a" href={`/rest-countries-api-mantine/country/${country.alpha3Code}`}>
                <Image src={country.flags.png} height={180} fit="cover" />
            </Card.Section>
            <Title order={4} mb={16}>{country.name}</Title>
            <Text weight={600} mb={4}>Population: <Text weight={300} component="span">{formatter.format(country.population)}</Text></Text>
            <Text weight={600} mb={4}>Region: <Text weight={300} component="span">{country.region}</Text></Text>
            <Text weight={600}>Capital: <Text weight={300} component="span">{country.capital}</Text></Text>
        </Card>
    );
}

export default CountryCard;