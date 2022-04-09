import { Grid, Card, Image } from "@mantine/core";

function CountryCard() {
    return (
        <Grid gutter={40}>
            {data.map((country) => (
                <Grid.Col span={4} key={country.alpha3Code}>
                    <Card>
                        <Card.Section component="a" href={`/rest-countries-api/country/${country.alpha3Code}`} target="_blank">
                            <Image src={country.flags.png} height={180} fit="cover" />
                        </Card.Section>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
    );
}

export default CountryCard;