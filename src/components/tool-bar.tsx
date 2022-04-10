import { Select, Group } from "@mantine/core";
import SearchIcon from "@components/icons/search-icon";
import { HomeCountry } from "@customTypes/country";
import { useNavigate } from "react-router-dom";

interface ToolBarProps {
    countries: HomeCountry[];
    handleRegion: (newRegion: string) => void;
}

function ToolBar({ countries, handleRegion }: ToolBarProps) {
    const navigate = useNavigate();

    return (
        <Group position="apart" align="center" sx={{ marginBottom: 32 }}>
            <Select
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