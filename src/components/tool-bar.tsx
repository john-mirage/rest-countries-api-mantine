import { Select, Group, createStyles } from "@mantine/core";
import SearchIcon from "@components/icons/search-icon";
import { HomeCountry } from "@customTypes/country";
import { useNavigate } from "react-router-dom";

interface ToolBarProps {
    countries: HomeCountry[];
    handleRegion: (newRegion: string) => void;
}

const useStyles = createStyles((theme) => ({
    bar: {
        marginBottom: 40,
    },
    search: {
        width: "100%",
        marginBottom: 40,
    },
    filter: {
        width: 200,
    },
    input: {
        height: 48,
    },
}));

function ToolBar({ countries, handleRegion }: ToolBarProps) {
    const { classes } = useStyles();
    const navigate = useNavigate();

    return (
        <Group className={classes.bar} position="apart" align="center">
            <Select
                classNames={{
                    root: classes.search,
                    input: classes.input,
                }}
                placeholder="Search a country"
                searchable
                nothingFound="No country found"
                data={countries.map((country) => ({ value: country.alpha3Code, label: country.name }))}
                icon={<SearchIcon />}
                rightSectionWidth={0}
                onChange={(value) => navigate(`/rest-countries-api-mantine/country/${value}`)}
                maxDropdownHeight={300}
                shadow="lg"
            />
            <Select
                classNames={{
                    root: classes.filter,
                    input: classes.input,
                }}
                data={[
                    { value: 'africa', label: 'Africa' },
                    { value: 'americas', label: 'America' },
                    { value: 'asia', label: 'Asia' },
                    { value: 'europe', label: 'Europe' },
                    { value: 'oceania', label: 'Oceania' },
                ]}
                placeholder="Filter by Region"
                clearable
                onChange={handleRegion}
                shadow="lg"
            />
        </Group>
    );
}

export default ToolBar;