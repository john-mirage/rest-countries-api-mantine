import { Container, Text, Paper, Button, Group, useMantineColorScheme } from "@mantine/core";
import MoonIcon from "@components/icons/moon-icon";
import MoonOutlinedIcon from "@components/icons/moon-outlined-icon";

function TopAppBar() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Paper component="header" shadow="lg">
            <Container>
                <Group position="apart" align="center" sx={{ paddingTop: 24, paddingBottom: 24, marginBottom: 32 }}>
                    <Text size="lg" weight={800}>Where in the world?</Text>
                    <Button variant="subtle" color="gray" leftIcon={colorScheme === "dark" ? <MoonIcon /> : <MoonOutlinedIcon />} onClick={() => toggleColorScheme()}>Dark Mode</Button>
                </Group>
            </Container>
        </Paper>
    );
}

export default TopAppBar;