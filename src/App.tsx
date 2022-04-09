import { MantineProvider, Container, Text, Paper, createStyles, Button, Select, Box, MultiSelect, Grid, Card, Image, Group } from "@mantine/core";
import GlobalStyles from "./assets/styles/global-styles";
import MoonIcon from "./components/moon-icon";
import SearchIcon from "./components/search-icon";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    topAppBar: {
        height: 80,
        marginBottom: 32,
    },
    topAppBarContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    select: {
        width: 480,
    },
    multiSelect: {
        width: 200,
    },
}));

function App() {
    const { classes } = useStyles();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code");
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <MantineProvider theme={{ fontFamily: 'Nunito Sans, sans serif', colorScheme: "dark" }}>
            <GlobalStyles />
            <Paper component="header" shadow="lg">
                <Container>
                    <Group position="apart" align="center" sx={{ paddingTop: 24, paddingBottom: 24, marginBottom: 32 }}>
                        <Text size="lg" weight={800}>Where in the world?</Text>
                        <Button leftIcon={<MoonIcon />}>Dark Mode</Button>
                    </Group>
                </Container>
            </Paper>
            <Box component="main">
                <Container>
                    <Group position="apart" align="center" sx={{ marginBottom: 32 }}>
                        <Select
                            className={classes.select}
                            placeholder="Search a country"
                            searchable
                            nothingFound="No country found"
                            data={data.map((country) => country.name)}
                            icon={<SearchIcon />}
                            rightSectionWidth={0}
                            onChange={(value) => console.log(value)}
                            maxDropdownHeight={148}
                        />
                        <MultiSelect
                            className={classes.multiSelect}
                            data={[
                                { value: 'africa', label: 'Africa' },
                                { value: 'americas', label: 'America' },
                                { value: 'asia', label: 'Asia' },
                                { value: 'europe', label: 'Europe' },
                                { value: 'oceania', label: 'Oceania' },
                            ]}
                            placeholder="Filter by Region"
                            clearable
                        />
                    </Group>
                    <Grid gutter={40}>
                        {data.length > 0 && data.map((country) => (
                            <Grid.Col span={4}>
                                <Card>
                                    <Card.Section>
                                        <Image src={country.flags.png} height={200} />
                                    </Card.Section>
                                </Card>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </MantineProvider>
    );
}

export default App;
