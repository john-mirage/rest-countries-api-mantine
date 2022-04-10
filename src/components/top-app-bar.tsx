import { Container, Paper, Button, useMantineColorScheme, createStyles, Text } from "@mantine/core";
import MoonIcon from "@components/icons/moon-icon";
import MoonOutlinedIcon from "@components/icons/moon-outlined-icon";

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
    },
    button: {
        padding: "0 8px",
        marginRight: -8,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: -0.2,
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
            <Container className={classes.container}>
                <Text className={classes.title}>Where in the world?</Text>
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