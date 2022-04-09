import { Select, MultiSelect, Group } from "@mantine/core";
import SearchIcon from "@components/icons/search-icon";


function ToolBar() {
    return (
        <Group position="apart" align="center" sx={{ marginBottom: 32 }}>
            <Select
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
    );
}

export default ToolBar;