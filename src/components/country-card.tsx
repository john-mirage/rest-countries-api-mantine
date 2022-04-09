import { HomeCountry } from "@customTypes/country";
import { Card, Image } from "@mantine/core";

interface CountryCardProps {
    country: HomeCountry;
}

function CountryCard({ country }: CountryCardProps) {
    return (
        <Card>
            <Card.Section component="a" href={`/rest-countries-api-mantine/country/${country.alpha3Code}`}>
                <Image src={country.flags.png} height={180} fit="cover" />
            </Card.Section>
        </Card>
    );
}

export default CountryCard;