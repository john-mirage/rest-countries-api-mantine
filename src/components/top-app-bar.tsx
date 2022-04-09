import { Container, Text, Paper, Button, Group } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import MoonIcon from "@components/icons/moon-icon";
import MoonOutlinedIcon from "@components/icons/moon-outlined-icon";

function TopAppBar() {
    const [theme, toggleTheme] = useToggle('light', ['light', 'dark']);

    return (
        <Paper component="header" shadow="lg">
            <Container>
                <Group position="apart" align="center" sx={{ paddingTop: 24, paddingBottom: 24, marginBottom: 32 }}>
                    <Text size="lg" weight={800}>Where in the world?</Text>
                    <Button variant="subtle" color="gray" leftIcon={theme === "dark" ? <MoonIcon /> : <MoonOutlinedIcon />} onClick={() => toggleTheme()}>Dark Mode</Button>
                </Group>
            </Container>
        </Paper>
    );
}

export default TopAppBar;