import { HomeCountry } from "@customTypes/country";
import { Card, createStyles, Text } from "@mantine/core";
import { forwardRef } from "react";

interface CountryCardProps {
    country: HomeCountry;
}

const useStyles = createStyles((theme) => ({
    card: {
        height: "100%",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        paddingBottom: "65%",

        [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
            padding: 0,
            height: 160,
        },
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
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

const CountryCard = forwardRef(({ country }: CountryCardProps, ref) => {
    const { classes } = useStyles();

    return (
        <Card ref={ref} className={classes.card} shadow="sm">
            <Card.Section mb={16} component="a" href={`/rest-countries-api-mantine/country/${country.alpha3Code}`}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={country.flags.png} alt={`${country.name} flag`} />
                </div>
            </Card.Section>
            <Text className={classes.title}>
                {country.name}
            </Text>
            <Text className={classes.property}>
                Population: <Text className={classes.value} component="span">{formatter.format(country.population)}</Text>
            </Text>
            <Text className={classes.property}>
                Region: <Text className={classes.value} component="span">{country.region}</Text>
            </Text>
            <Text className={classes.property}>
                Capital: <Text className={classes.value} component="span">{country.capital}</Text>
            </Text>
        </Card>
    );
});

export default CountryCard;