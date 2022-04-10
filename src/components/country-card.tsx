import { HomeCountry } from "@customTypes/country";
import { Card, createStyles, Image, Text, Title } from "@mantine/core";

interface CountryCardProps {
    country: HomeCountry;
}

const useStyles = createStyles((theme) => ({
    card: {
        height: "100%",
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 12,
    },
    property: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 4,
        "&:last-child": {
            marginBottom: 24,
        },
    },
    value: {
        fontSize: 14,
        fontWeight: 300,
    }
}));

const formatter = new Intl.NumberFormat("en-US");

function CountryCard({ country }: CountryCardProps) {
    const { classes } = useStyles();

    return (
        <Card className={classes.card} shadow="sm">
            <Card.Section mb={16} component="a" href={`/rest-countries-api-mantine/country/${country.alpha3Code}`}>
                <Image src={country.flags.png} height={160} fit="cover" />
            </Card.Section>
            <Text className={classes.title}>
                {country.name}
            </Text>
            <Text className={classes.property}>
                Population: 
                <Text className={classes.value} component="span">
                    {formatter.format(country.population)}
                </Text>
            </Text>
            <Text className={classes.property}>
                Region: 
                <Text className={classes.value} component="span">
                    {country.region}
                </Text>
            </Text>
            <Text className={classes.property}>
                Capital: 
                <Text className={classes.value} component="span">
                    {country.capital}
                </Text>
            </Text>
        </Card>
    );
}

export default CountryCard;