import { Paper, Button, useMantineColorScheme, createStyles, Text } from "@mantine/core";
import MoonIcon from "@components/icons/moon-icon";
import MoonOutlinedIcon from "@components/icons/moon-outlined-icon";
import Container from "@components/container";

const useStyles = createStyles((theme) => ({
    bar: {
        height: 80,
        marginBottom: 24,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
    title: {
        fontSize: 14,
        fontWeight: 800,
        lineHeight: "20px",
        letterSpacing: -0.2,

        [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: 24,
            lineHeight: "34px",
        },
    },
    button: {
        padding: "0 8px",
        marginRight: -8,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: -0.2,

        [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: 16,
        },
    },
    buttonLeftIcon: {
        width: 14,
        marginRight: 8,
    }
}));

function TopAppBar() {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Paper className={classes.bar} component="header" shadow="lg">
            <Container topAppBar>
                <Text className={classes.title} component="h1">Where in the world?</Text>
                <Button
                    classNames={{
                        root: classes.button,
                        label: classes.buttonLabel,
                        leftIcon: classes.buttonLeftIcon,
                    }}
                    variant="subtle"
                    color="gray"
                    leftIcon={colorScheme === "dark" ? <MoonIcon /> : <MoonOutlinedIcon />}
                    onClick={() => toggleColorScheme()}
                >
                    Dark Mode
                </Button>
            </Container>
        </Paper>
    );
}

export default TopAppBar;